import React, { useState } from 'react';
import axios from 'axios';
import Select from './Select'
import avatarMan from '../../../../images/users-profile/client-man.png';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './addClient.css'; 

const AddClient = ({ onCancel}) => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        birthday: '',
      };

      const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must be only digits').required('Phone number is required'),
        age: Yup.number().min(1, 'Age must be at least 1').max(120, 'Age must be at most 120').required('Age is required'),
        gender: Yup.string().oneOf(['male', 'female', 'other'], 'Invalid gender').required('Gender is required'),
        birthday: Yup.date().max(new Date(), 'Birthday cannot be in the future').required('Birthday is required'),
      });

      const onSubmit = (values, { resetForm }) => {
        console.log('Form data', values);
        // Perform your submission logic here, then reset the form
        resetForm();
      };
    

    const handleCancel = () => {
        onCancel(); // Call onCancel function passed from the parent component
    };
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const userData = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         phone: phone,
    //         age: age,
    //         gender: gender,
    //         birthday: birthday
    //     };

    //     console.log('User data: ', userData);
    // };

    // const handleSubmit2 = async (e) => {
    //     e.preventDefault();
        
    //     const userData = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         phone: phone,
    //         age: age,
    //         gender: gender,
    //         birthday: birthday
    //     };

    //     try{            
    //         if(!firstName.trim() || !lastName.trim() || !gender.trim()){
    //             setShowWarning(true);
    //             return;
    //         }

    //         const response = await axios.post('http://localhost:8080/clients/', {
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           });

    //         console.log('User added successfully:', response.data);


    //         Swal.fire({
    //             icon: 'success',
    //             title: 'User added successfully!',
    //             showConfirmButton: true,
    //             confirmButtonColor: "#1cbbdb"                
    //         });

    //         setFormData({
    //             firstName: '',
    //             lastName: '',
    //             email: '',
    //             phone: '',
    //             age: '',
    //             gender: '',
    //             birthday: ''
    //         });
    //         setShowWarning(false);
    //     }catch(error){
    //         console.error('Error adding climber: ', error);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Error',
    //             text: 'Failed to add user. Please try again later.',
    //             showConfirmButton: true,
    //             confirmButtonColor: "#1cbbdb"                
    //         });
    //     }
        
    // };
    

    return(        
        <div className='containerCenter'>
            <div className='containerForm'>
                <h2 className='pageTitle'>Add Climber</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ handleReset }) => (
                        <Form className='formAddClient' >                    
                            <div className="inputGroup">
                                <label htmlFor="firstName">First Name</label>
                                <Field  type="text" id="firstName" name="firstName" placeholder="e.g Jhon"/>                                
                                <ErrorMessage name="firstName" component="div" className="error-message"/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="lastName">Last Name</label>
                                <Field type="text" id="lastName" name="lastName" placeholder="e.g Wick"/>                                
                                <ErrorMessage name="lastName" component="div" className="error-message"/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="gender">Gener</label>
                                <Field as="select" id="gender" name="gender">
                                    <option value="" disabled selected>Select Gender</option>   
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Field>                                
                                <ErrorMessage name="gender" component="div" className="error-message"/>
                            </div>
                            <div className='inputGroup'>
                                <label htmlFor="email">Email <span className='light'>(Optional)</span></label>
                                <Field type="email" id="email" name="email" placeholder="e.g jhonwick@outlook.com"/>
                                <ErrorMessage name="email" component="div" className="error-message"/>
                            </div>
                            <div className='inputGroup'>
                                <label htmlFor="phone">Phone <span className='light'>(Optional)</span></label>
                                <Field type="text" id="phone" name="phone" placeholder="e.g 636-123-45-67"/>
                                <ErrorMessage name="phone" component="div" className="error-message"/>
                            </div>
                            <div className='inputGroup'>
                                <label htmlFor="age">Age <span className='light'>(Optional)</span> </label>
                                <Field type="number" id="age" name="age" placeholder="e.g 21"/>
                                <ErrorMessage name="age" component="div" className="error-message"/>
                            </div>
                            
                            <div className='inputGroup'>
                                <label htmlFor="birthday">Birthday <span className='light'>(Optional)</span></label>                                
                                <Field type="date" id="birthday" name="birthday"/>
                                <ErrorMessage name="birthday" component="div" className="error-message"/>
                            </div>
                            {/* <div className='inputGroup'>
                                <label>Avatar</label>
                                <Select></Select>
                            </div> */}

                            <div className='formBoxButtons'>
                                <button className='cancel' onClick={handleCancel}>Canel</button>
                                <button type='submit' className='submit'>Add</button>
                            </div>                    
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddClient;