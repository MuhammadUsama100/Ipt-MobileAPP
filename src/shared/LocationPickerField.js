import React from 'react';
import FormSelect from './FormSelect';

export default function LocationPickerField({
    control,
    required,
    error,
    name,
    label
}) {

    const cities = [
        {
            id: 1,
            name: 'JavaScript',
        },
        {
            id: 2,
            name: 'Java',
        },
        {
            id: 3,
            name: 'Ruby',
        },
        {
            id: 4,
            name: 'React Native',
        },
        {
            id: 5,
            name: 'PHP',
        },
        {
            id: 6,
            name: 'Python',
        },
        {
            id: 7,
            name: 'Go',
        },
        {
            id: 8,
            name: 'Swift',
        },
    ];

    return (
        <FormSelect
            control={control}
            name={name}
            label={label}
            required={required}
            error={error}
            items={cities}
        />
    )
}