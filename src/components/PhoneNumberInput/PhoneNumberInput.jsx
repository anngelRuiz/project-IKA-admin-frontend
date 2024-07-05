import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './phoneNumberInput.css';

const PhoneNumberInput = ({ field, form, touched, errors }) => {
    const hasError = touched[field.name] && errors[field.name];
    const inputClassName = `form-control ${hasError ? 'input-error' : ''}`;

    return (
        <PhoneInput
                country={'mx'}
                value={field.value}
                onChange={(value) => form.setFieldValue(field.name, value)}
                inputProps={{
                    name: 'phone',
                    id: 'phone',
                    required: true,
                    className: inputClassName
                }}
            />
    );
};

export default PhoneNumberInput;
