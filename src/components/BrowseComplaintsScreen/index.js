import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator, Button, Card, Divider, Paragraph, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import LocationPickerField from '../../shared/LocationPickerField';
import OffensePickerField from '../../shared/OffensePickerField';
import { getAllComplaints, postEndorsement } from '../../sources';

const styles = StyleSheet.create({
    complaintContainer: {
        marginBottom: 20,
    },
    endorseButtonContainer: {
        justifyContent: 'flex-end'
    }
});

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
        console.log(filters);
        dispatch(getAllComplaints(filters));
    }, [filters]);

    const handleComplaintEndorse = (complaint) => {
        dispatch(postEndorsement({
            endorBy: userLoginReducer.data['userID'],
            complainId: complaint.complainId,
        }));
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
                required={true}
                error={errors.type?.message}
                onOffenseSelect={handleOffenseSelect}
            />
            <LocationPickerField
                control={control}
                name="location"
                label="Location"
                required={true}
                error={errors.location?.message}
                onLocationSelect={handleLocationSelect}
            />
            <Button mode='text' onPress={() => {
                reset();
                setFilters({});
            }}>Reset</Button>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            {!getAllComplaintsReducer.isLoading && <ScrollView>
                {getAllComplaintsReducer.data.length > 0 && getAllComplaintsReducer.data.map((complaint) => {
                    return (
                        <Card key={complaint.complainId} style={styles.complaintContainer}>
                            <Card.Title title={complaint.offense.name} subtitle={`Location: ${complaint.location.name}`} />
                            <Card.Content>
                                <Paragraph style={{fontWeight: 'bold'}}>Description:</Paragraph>
                                <Paragraph>{complaint.detail}</Paragraph>
                            </Card.Content>
                            <Card.Actions style={styles.endorseButtonContainer}>
                            <Button
                                onPress={() => handleComplaintEndorse(complaint)}
                                loading={false}
                            >
                                Endorse
                            </Button>
                            </Card.Actions>
                        </Card>
                    )
                })}
                {getAllComplaintsReducer.data.length < 1 && <Paragraph style={{alignSelf: 'center'}}>No complaints registered.</Paragraph>}
            </ScrollView>}
            {getAllComplaintsReducer.isLoading && <ActivityIndicator />}
        </SimpleLayout>
    )
}