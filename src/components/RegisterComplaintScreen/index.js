import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormSelect from '../../shared/FormSelect';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import FormField from '../../shared/FormField';
import { ActivityIndicator, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import LocationPickerField from '../../shared/LocationPickerField';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOffense, registerComplaint } from '../../sources';

const styles = StyleSheet.create({
  registerComplaintButton: {
    marginTop: 10,
  },
})

export default function RegisterComplaintScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({ mode: 'all' });

    const dispatch = useDispatch();

    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedOffense, setSelectedOffense] = useState();

    const userLoginReducer = useSelector(state => state.userReducer.userLogin);
    const getAllOffenseReducer = useSelector(state => state.offenseReducer.getAllOffense);
    const getAllLocationReducer = useSelector(state => state.locationReducer.getAllLocation);
    const registerComplaintReducer = useSelector(state => state.complaintReducer.registerComplaint);

    useEffect(() => {
        dispatch(getAllOffense());
    }, []);

    useEffect(() => {
        if(registerComplaintReducer.isSuccess) {
            alert("Complaint registered successfully!");
        }
    }, [registerComplaintReducer.isFetched]);

    if(getAllOffenseReducer.isSuccess != true && getAllLocationReducer.isSuccess != true) return <ActivityIndicator />;

    const offenses = getAllOffenseReducer.data.map((offense) => ({id: offense.offenseId, name: offense.name}));

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
    }

    const handleOffenseSelect = (offense) => {
        setSelectedOffense(offense);
    }

    const handleRegisterComplaint = (values) => {
        const payload = {
            detail: values.description,
            title: "",
            registerBy: userLoginReducer.data['userID'],
            offenseId: selectedOffense.id,
            locationId: selectedLocation.id,
        };
        dispatch(registerComplaint(payload, handleRegisterComplaintError));
    }

    const handleRegisterComplaintError = (err) => {
        // setError()
        console.log(err);
    };

    return (
        <SimpleLayout>
            <SafeAreaView>
                <FormSelect
                    control={control}
                    name="type"
                    label="Type"
                    required={true}
                    error={errors.type?.message}
                    items={offenses}
                    onItemSelect={handleOffenseSelect}
                />
                <LocationPickerField
                    control={control}
                    name="location"
                    label="Location"
                    required={true}
                    error={errors.location?.message}
                    onLocationSelect={handleLocationSelect}
                />
                <FormField
                    control={control}
                    name="description"
                    label="Description"
                    required={true}
                    multiline={true}
                    error={errors.description?.message}
                />
                <Button
                    mode="contained"
                    onPress={handleSubmit(handleRegisterComplaint)}
                    style={styles.registerComplaintButton}
                    disabled={!isValid || registerComplaintReducer.isLoading}
                    loading={registerComplaintReducer.isLoading}
                >
                    Register
                </Button>
            </SafeAreaView>
        </SimpleLayout>
    )
}
