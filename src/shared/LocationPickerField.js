import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLocation } from '../sources';
import FormSelect from './FormSelect';

export default function LocationPickerField({
    control,
    required,
    error,
    name,
    label,
    onLocationSelect,
}) {

    const dispatch = useDispatch();
    const getAllLocationReducer = useSelector(state => state.locationReducer.getAllLocation);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        dispatch(getAllLocation());
    }, []);

    useEffect(() => {
        if(getAllLocationReducer.isSuccess) {
            setLocations(getAllLocationReducer.data.map((location) => ({id: location.locationId, name: location.name})));
        }
    }, [getAllLocationReducer.isFetched]);

    const handleLocationSelect = (location) => {
        if(onLocationSelect) onLocationSelect(location);
    };

    if(getAllLocationReducer.isLoading) return <ActivityIndicator />;

    return (
        <FormSelect
            control={control}
            name={name}
            label={label}
            required={required}
            error={error}
            items={locations}
            onItemSelect={handleLocationSelect}
        />
    )
}