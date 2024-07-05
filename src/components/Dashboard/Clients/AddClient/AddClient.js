import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from './Select'
import userAvatarImg from '../../../../images/news/usuario.png';
import Swal from 'sweetalert2';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import PhoneNumberInput from '../../../PhoneNumberInput/PhoneNumberInput.jsx';
import { useLoading } from '../../../../context/LoadingContext ';
import Spinner from '../../../Spinner/Spinner';
import * as Yup from 'yup';
import axios from 'axios';
import './addClient.css';

const AddClient = () => {
    const navigate = useNavigate();
    const {isLoading, setIsLoading} = useLoading(false);
    const [avatarUrl, setAvatarUrl] = useState(userAvatarImg);
    

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        birthday: '',
        avatar: '',
        membershipType: '',
    };

      const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        //email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
        .test('is-complete', 'Phone number is incomplete', function(value) {
            const { path, createError } = this;
            if (!value || value.trim().length === 0) {
                return createError({ path, message: 'Phone number is required' });
            }
            return true;
        })
        .required('Phone number is required'),
        age: Yup.number().min(1, 'Age must be at least 1').max(120, 'Age must be at most 120').required('Age is required'),
        gender: Yup.string().oneOf(['MALE', 'FEMALE', 'OTHER'], 'Invalid gender').required('Gender is required'),
        //birthday: Yup.date().max(new Date(), 'Birthday cannot be in the future').required('Birthday is required'),
        membershipType: Yup.string().oneOf(['MONTHLY', 'DAILY', 'ANNUALLY'], 'Invalid Membership Type').required('Membership Type is required'),
        avatar: Yup.string().oneOf(['MALE', 'FEMALE', 'OTHER'], 'Invalid avatar').required('Avatar is required'),
        //emergencyContact: Yup.string().matches(/^[0-9]+$/, 'Phone number must be only digits').required('Emergency Contact number is required'),
      });

      const submitData = async (values, { resetForm }) => { 
        console.log('Form data', values);
        console.log('Initial Values:', initialValues);

        setIsLoading(true);

        try{
            const response = await axios.post('http://localhost:8080/api/clients', values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            Swal.fire({
                icon: 'success',
                title: 'User added successfully!',
                showCancelButton: true,
                cancelButtonText: 'Go to Clients',
                confirmButtonText: 'See client added',
                confirmButtonColor: "#1cbbdb",
                reverseButtons: true,
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {                    
                    navigate(`/clients/${response.data.id}`);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigate('/clients');
                }
            });
            
            resetForm();
        }catch(error){
            console.error('Error adding climber: ', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Failed to add user.',
                text: error.message,
                showConfirmButton: true,
                confirmButtonColor: "#1cbbdb"
            });
        } finally{
            setIsLoading(false);
        }
    };
    
    return(        
        <div className='containerCenterY addClientView'>
            <div className='containerForm'>
                {isLoading && <Spinner />} 
                <h2 className='pageTitle'>Add Climber</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, { setSubmitting, resetForm }) => {
                    submitData(values, { resetForm });
                }}>
                {({ errors, touched, setFieldValue }) => {
                        return (
                            <Form className='formAddClient'>
                                
                                <div className="inputGroup">
                                    <label htmlFor="firstName">First Name</label>
                                    <Field type="text" id="firstName" name="firstName" placeholder="e.g Jhon" className={touched.firstName && errors.firstName ? 'input-error' : ''}/>
                                    <ErrorMessage name="firstName" component="div" className="error-message" />
                                </div>
                                <div className="inputGroup">
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field type="text" id="lastName" name="lastName" placeholder="e.g Wick" className={touched.lastName && errors.lastName ? 'input-error' : ''}/>
                                    <ErrorMessage name="lastName" component="div" className="error-message" />
                                </div>

                                <div className='inputGroup'>
                                    <label htmlFor="birthday">Birthday <span className='light optional'>(Optional)</span></label>
                                    <Field type="date" id="birthday" name="birthday" className={touched.birthday && errors.birthday ? 'input-error' : ''}/>
                                    <ErrorMessage name="birthday" component="div" className="error-message" />
                                </div>

                                <div className="inputGroup">
                                    <label htmlFor="gender">Gender</label>
                                    <div className={`groupRadios ${touched.gender && errors.gender ? 'input-error' : ''}`} >
                                        <Field type="radio" id="male" name="gender" value="MALE" />
                                        <label for="male">Male</label><br/>
                                        <Field type="radio" id="female" name="gender" value="FEMALE" />
                                        <label for="female">Female</label><br/>
                                        <Field type="radio" id="other" name="gender" value="OTHER" />
                                        <label for="other">Other</label>
                                    </div>
                                    <ErrorMessage name="gender" component="div" className="error-message" />
                                </div>

                                <div className='inputGroup'>
                                <label htmlFor="age">Age</label>
                                        <Field type="number" id="age" name="age" placeholder="e.g 21" className={touched.age && errors.age ? 'input-error' : ''}/>
                                        <ErrorMessage name="age" component="div" className="error-message" />
                                </div>
                                <div className='inputGroup'>
                                    <label>Avatar</label>
                                    <div className='inputGroupAvatar'>
                                        <img src={avatarUrl} alt='Avatar'/>
                                        <Field name="avatar" component={Select} setAvatarUrl={setAvatarUrl} setFieldValue={setFieldValue} touched={touched} errors={errors}/>
                                    </div>
                                    <ErrorMessage name="avatar" component="div" className="error-message" />
                                </div>

                                <div className='inputGroup'>
                                    <label htmlFor="email">Email <span className='light optional'>(Optional)</span></label>
                                    <Field type="email" id="email" name="email" placeholder="e.g jhonwick@outlook.com" />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>

                                <div className='inputGroup'>
                                    <label htmlFor="phone">Phone</label>
                                    <Field autoFocus={false} name="phone" component={PhoneNumberInput} touched={touched} errors={errors}/>
                                    <ErrorMessage name="phone" component="div" className="error-message" />
                                </div>

                                <div className='inputGroup'>
                                    <label htmlFor="phone">Emergency Contact <span className='light optional'>(Optional)</span></label>
                                    <Field type="text" id="emergencyContact" name="emergencyContact" placeholder="e.g 636-123-92-23" />
                                    <ErrorMessage name="emergencyContact" component="div" className="error-message" />
                                </div>

                                <div className="inputGroup">
                                    <label htmlFor="membershipType">Membership Type</label>
                                    <div className={`groupRadios ${touched.membershipType && errors.membershipType ? 'input-error' : ''}`}>
                                        <label><Field type="radio" name="membershipType" value="MONTHLY"/>Monthly</label>
                                        <label><Field type="radio" name="membershipType" value="DAILY" />Daily</label>
                                        <label><Field type="radio" name="membershipType" value="ANNUALLY" />Annually</label>
                                    </div>
                                    <ErrorMessage name="membershipType" component="div" className="error-message" />
                                </div>

                                <div className='formBoxButtons'>
                                    <Link className="btn cancelBtn" to="/clients">Canel</Link>
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