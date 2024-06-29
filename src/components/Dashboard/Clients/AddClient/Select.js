import {useState} from 'react';
import clientWomanImg from '../../../../images/users-profile/client-woman-1.png';
import clientManImg from '../../../../images/users-profile/client-man-1.png';
import './select.css';

const Select = ({ setAvatarUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Avatar');

    const options = [
        { label: 'Man', imgSrc: clientManImg },
        { label: 'Woman', imgSrc: clientWomanImg }
    ];

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionLabel, optionImg) => {
        setSelectedOption(optionLabel);
        setIsOpen(false);
        setAvatarUrl(optionImg);
    };

    return (
        <div className='selectMenu'>
            <div className='selectBtn' onClick={toggleOptions}>
                <span className='sBtnText'>{selectedOption}</span>
                <span className="material-icons-sharp icon">keyboard_arrow_down</span>
            </div>

            {isOpen && (
                <ul className='options'>
                    {options.map((option, index) => (
                        <li key={index} className='option' onClick={()  => handleOptionClick(option.label, option.imgSrc)}>
                            <img src={option.imgSrc} alt='option.label'></img>
                            <span className='optionText'>{option.label}</span>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    );
}

export default Select;