import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator, Button, Card, Divider, Paragraph, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import LocationPickerField from '../../shared/LocationPickerField';
import OffensePickerField from '../../shared/OffensePickerField';
import { getAllComplaints, postEndorsement } from '../../sources';
import ComplaintCard from '../../shared/ComplaintCard';

export default function BrowseComplaintsScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({ mode: 'all' });

    const dispatch = useDispatch();

    const [filters, setFilters] = useState({});
    
    const userLoginReducer = useSelector(state => state.userReducer.userLogin);
    const getAllComplaintsReducer = useSelector(state => state.complaintReducer.getAllComplaints);

    useEffect(() => {
        dispatch(getAllComplaints(filters));
    }, [filters]);

    const handleOnRefresh = () => {
        dispatch(getAllComplaints(filters));
    }

    const handleLocationSelect = (location) => {
        setFilters({
            ...filters,
            locationId: location.id,
        });
    }

    const handleOffenseSelect = (offense) => {
        setFilters({
            ...filters,
            offenseId: offense.id,
        });
    }

    return (
        <SimpleLayout>
            <Text>Filters:</Text>
            <OffensePickerField
                control={control}
                name="type"
                label="Type"
                error={errors.type?.message}
                onOffenseSelect={handleOffenseSelect}
            />
            <LocationPickerField
                control={control}
                name="location"
                label="Location"
                error={errors.location?.message}
                onLocationSelect={handleLocationSelect}
            />
            <Button mode='text' onPress={() => {
                reset();
                setFilters({});
            }}>Reset</Button>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            {!getAllComplaintsReducer.isLoading && (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={getAllComplaintsReducer.isLoading}
                            onRefresh={handleOnRefresh}
                        />
                    }
                >
                    {getAllComplaintsReducer.data?.length > 0 && getAllComplaintsReducer.data.map((complaint) => {
                        return (
                            <ComplaintCard key={complaint.complainId} complaint={complaint} endorsementBy={userLoginReducer.data['userID']} />
                        )
                    })}
                    {getAllComplaintsReducer.data?.length < 1 && <Paragraph style={{alignSelf: 'center'}}>No complaints registered.</Paragraph>}
                </ScrollView>
            )}
            {getAllComplaintsReducer.isLoading && <ActivityIndicator />}
        </SimpleLayout>
    )
}