import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from './Select'
import clientManImg from '../../../../images/users-profile/client-man.png';
import userAvatarImg from '../../../../images/news/usuario.png';
import Swal from 'sweetalert2';
import { Formik, Form, Field, ErrorMessage, useFormik  } from 'formik';
import * as Yup from 'yup';
import './addClient.css'; 

const AddClient = () => {    
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        birthday: '',
        avatar: '',
    };

      const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must be only digits').required('Phone number is required'),
        age: Yup.number().min(1, 'Age must be at least 1').max(120, 'Age must be at most 120').required('Age is required'),
        gender: Yup.string().oneOf(['male', 'female', 'other'], 'Invalid gender').required('Gender is required'),
        birthday: Yup.date().max(new Date(), 'Birthday cannot be in the future').required('Birthday is required'),
        avatar: Yup.string().oneOf(['Man', 'Woman', 'Other'], 'Invalid avatar').required('Avatar is required'),
      });

      const submitData = async (values, { resetForm }) => { 
        console.log('Form data', values);
        try{
            // const response = await axios.post('http://localhost:8080/clients/', {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

            //console.log('User added successfully:', response.data);

            Swal.fire({
                icon: 'success',
                title: 'User added successfully!',
                showConfirmButton: true,
                confirmButtonColor: "#1cbbdb"                
            });
            
            resetForm();
        }catch(error){
            console.error('Error adding climber: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add user. Please try again later.',
                showConfirmButton: true,
                confirmButtonColor: "#1cbbdb"
            });
        }
    };
    
    return(        
        <div className='containerCenterY'>
            <div className='containerForm'>
                <h2 className='pageTitle'>Add Climber</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, { setSubmitting, resetForm }) => {
        submitData(values, { resetForm });
        //    setTimeout(() => {
        //      alert(JSON.stringify(values, null, 2));
        //      setSubmitting(false);
        //    }, 400);
         }}>
                {({ values, setFieldValue }) => {
                        return (
                            <Form className='formAddClient'>
                                
                                <div className="inputGroup">
                                    <label htmlFor="firstName">First Name</label>
                                    <Field type="text" id="firstName" name="firstName" placeholder="e.g Jhon" />
                                    <ErrorMessage name="firstName" component="div" className="error-message" />
                                </div>
                                <div className="inputGroup">
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field type="text" id="lastName" name="lastName" placeholder="e.g Wick" />
                                    <ErrorMessage name="lastName" component="div" className="error-message" />
                                </div>
                                <div className="inputGroup">
                                    <label htmlFor="gender">Gender</label>
                                    <Field as="select" id="gender" name="gender">
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="error-message" />
                                </div>
                                <div className='inputGroup'>
                                    <label htmlFor="email">Email <span className='light optional'>(Optional)</span></label>
                                    <Field type="email" id="email" name="email" placeholder="e.g jhonwick@outlook.com" />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
                                <div className='inputGroup'>
                                    <label htmlFor="phone">Phone <span className='light optional'>(Optional)</span></label>
                                    <Field type="text" id="phone" name="phone" placeholder="e.g 636-123-45-67" />
                                    <ErrorMessage name="phone" component="div" className="error-message" />
                                </div>
                                <div className='inputGroup'>
                                    <label htmlFor="birthday">Birthday <span className='light optional'>(Optional)</span></label>
                                    <Field type="date" id="birthday" name="birthday" />
                                    <ErrorMessage name="birthday" component="div" className="error-message" />
                                </div>
                                <div className='inputGroup'>
                                <label htmlFor="age">Age <span className='light optional'>(Optional)</span> </label>
                                        <Field type="number" id="age" name="age" placeholder="e.g 21" />
                                        <ErrorMessage name="age" component="div" className="error-message" />
                                </div>
                                <div className='inputGroup'>
                                    <label>Avatar</label>
                                    <div className='inputGroupAvatar'>
                                        <img src={userAvatarImg} alt='Man'></img>
                                        <Select
                                onChange={(selectedOption) => setFieldValue('avatar', selectedOption)}
                            />
                                    </div>
                                    <ErrorMessage name="avatar" component="div" className="error-message" />
                                </div>   
                                <div className='formBoxButtons'>
                                    <Link className="btn cancelBtn" to="/dashboard">Canel</Link>
                                    <button type='submit' className='submit'>Add</button>                                    
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

export default AddClient;