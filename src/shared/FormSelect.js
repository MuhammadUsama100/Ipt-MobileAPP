import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import SearchableDropdown from 'react-native-searchable-dropdown';
import FormController from './FormController';

const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
});

export default function FormSelect({
    control,
    name,
    label,
    required,
    items,
    error,
}) {
    const theme = useTheme();
    const [selectedItems, setSelectedItems] = useState([]);
    let rules = {};
    if (required) {
        rules['required'] = {
            value: true,
            message: `Required`,
        };
    }

    return (
        <FormController
            name={name}
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
                // <TextInput
                //   label={label}
                //   mode="outlined"
                //   value={value}
                //   secureTextEntry={isPassword}
                //   onBlur={onBlur}
                //   onChangeText={text => onChange(text)}
                // />
                <SearchableDropdown
                    selectedItems={selectedItems}
                    onItemSelect={(item) => {
                        setSelectedItems([item]);
                        onChange(item.name);
                        // console.log(item);
                    }}
                    containerStyle={{ padding: 5 }}
                    itemStyle={{
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#fff',
                        borderBottomColor: '#bbb',
                        borderBottomWidth: 1,
                        borderBottomRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ mineight: 140 }}
                    items={items}
                    defaultIndex={0}
                    resetValue={false}
                    textInputProps={
                        {
                            value: value,
                            placeholder: label,
                            style: {
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#111',
                                borderRadius: 5,
                            },
                            onTextChange: text => onChange(text),
                            onBlur: onBlur,
                        }
                    }
                    listProps={
                        {
                            nestedScrollEnabled: true,
                        }
                    }
                />
            )}
            error={error}
            required={required}
        />
    );
}
