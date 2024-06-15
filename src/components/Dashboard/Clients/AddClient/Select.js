import {useRef, useEffect, useState} from 'react';
import clientWomanImg from '../../../../images/users-profile/client-woman.png';
import clientManImg from '../../../../images/users-profile/client-man.png';
import './select.css';

const Select = ({onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Avatar');
    const [selectedImg, setSelectedImg] = useState(null);

    const options = [
        { label: 'Man', imgSrc: clientManImg },
        { label: 'Woman', imgSrc: clientWomanImg }
    ];

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionLabel, optionImg) => {
        console.log("optionLabel: " + optionLabel);
        console.log("optionImg: " + optionImg);
        setSelectedOption(optionLabel);
        setSelectedImg(optionImg);
        setIsOpen(false);
        onChange(optionLabel);
    };

    return (
        <div className='selectMenu'>
            <div className='selectBtn' onClick={toggleOptions}>
                {/* {selectedImg && <img src={selectedImg} alt={selectedOption} className='selectedImg' />}  */}
                <span className='sBtnText'>{selectedOption}</span>
                <span className="material-icons-sharp icon">keyboard_arrow_down</span>
            </div>

            {isOpen && (
                <ul className='options'>
                    {options.map((option, index) => (                    
                        <li key={index} className='option'
                            onClick={()  => handleOptionClick(option.label, option.imgSrc)}
                        >
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