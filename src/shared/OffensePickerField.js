import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOffense } from '../sources';
import FormSelect from './FormSelect';

export default function OffensePickerField({
    control,
    required,
    error,
    name,
    label,
    onOffenseSelect,
}) {

    const dispatch = useDispatch();
    const getAllOffenseReducer = useSelector(state => state.offenseReducer.getAllOffense);
    const [offenses, setOffenses] = useState([]);

    useEffect(() => {
        dispatch(getAllOffense());
    }, []);

    useEffect(() => {
        if(getAllOffenseReducer.isSuccess) {
            setOffenses(getAllOffenseReducer.data.map((offense) => ({id: offense.offenseId, name: offense.name})));
        }
    }, [getAllOffenseReducer.isFetched]);

    const handleOffenseSelect = (offense) => {
        if(onOffenseSelect) onOffenseSelect(offense);
    };

    if(getAllOffenseReducer.isLoading) return <ActivityIndicator />;

    return (
        <FormSelect
            control={control}
            name={name}
            label={label}
            required={required}
            error={error}
            items={offenses}
            onItemSelect={handleOffenseSelect}
        />
    )
}