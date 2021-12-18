import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormSelect from '../../shared/FormSelect';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import { COMPLAINT_TYPE } from '../../constants';
import FormField from '../../shared/FormField';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import LocationPickerField from '../../shared/LocationPickerField';

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
    } = useForm({ mode: 'all' });

    const handleRegisterComplaint = (values) => {
        console.log(values);
    }

    return (
        <SimpleLayout>
            <SafeAreaView>
                <FormSelect
                    control={control}
                    name="type"
                    label="Type"
                    required={true}
                    error={errors.type?.message}
                    items={Object.values(COMPLAINT_TYPE).map((type, i) => ({ id: i, name: type }))}
                />
                <LocationPickerField
                    control={control}
                    name="location"
                    label="Location"
                    required={true}
                    error={errors.location?.message}
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
                    disabled={!isValid}>
                    Register
                </Button>
            </SafeAreaView>
        </SimpleLayout>
    )
}