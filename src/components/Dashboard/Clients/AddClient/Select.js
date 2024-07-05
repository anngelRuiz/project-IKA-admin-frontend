import {useState, useEffect, useRef } from 'react';
import clientWomanImg from '../../../../images/users-profile/client-woman-1.png';
import clientManImg from '../../../../images/users-profile/client-man-1.png';
import './select.css';

const Select = ({ setAvatarUrl, setFieldValue, field, touched, errors }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Avatar');
    const selectMenuRef = useRef(null);

    const hasError = touched[field.name] && errors[field.name];
    const inputClassName = `${hasError ? 'input-error' : ''}`;

    const options = [
        { label: 'Man', value: 'MALE', imgSrc: clientManImg },
        { label: 'Woman', value: 'FEMALE', imgSrc: clientWomanImg }
    ];

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionLabel, optionValue, optionImg) => {
        setSelectedOption(optionLabel);
        setIsOpen(false);
        setAvatarUrl(optionImg);
        setFieldValue('avatar', optionValue);
        console.log(optionLabel);
    };

    const handleClickOutside = (event) => {
        if (selectMenuRef.current && !selectMenuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className='selectMenu' ref={selectMenuRef}>
            <div className={`selectBtn ${inputClassName}`} onClick={toggleOptions}>
                <span className='sBtnText'>{selectedOption}</span>
                <span className="material-icons-sharp icon">keyboard_arrow_down</span>
            </div>

            {isOpen && (
                <ul className='options'>
                    {options.map((option, index) => (
                        <li key={index} className='option' onClick={()  => handleOptionClick(option.label, option.value, option.imgSrc)}>
                            <img src={option.imgSrc} alt={option.label}></img>
                            <span className='optionText'>{option.label}</span>
                        </li>
                    ))}
                </ul>
            )}            
        </div>
    );
}

export default Select;