import React from 'react';
import { useTheme } from '../../../context/theme-context';
import "../top.css"

export const Toggle = () => {

    const { theme, toggleTheme } = useTheme()

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        console.log("change to dark");        
        console.log(document.querySelector("body"));
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        console.log("change to light");
        console.log(document.querySelector("body"));
    };

    // const toggleTheme = (e) =>{
    //     const checkbox = e.target;
    //     const activeClass = "active";

    //     if (checkbox.checked) {
    //         setDarkMode();
    //         document.querySelector(".darkLabel").classList.add(activeClass);
    //         document.querySelector(".lightLabel").classList.remove(activeClass);
    //     } else {
    //         setLightMode();
    //         document.querySelector(".darkLabel").classList.remove(activeClass);
    //         document.querySelector(".lightLabel").classList.add(activeClass);
    //     }
    // }

    return (
        <div className="theme-toggler">
            <input type="checkbox"
                id="check"
                className="toggle"
                onChange={toggleTheme}
            />            
            <label htmlFor="check" className="material-icons-sharp lightLabel active">light_mode</label>
            <label htmlFor="check"  className="material-icons-sharp darkLabel ">dark_mode</label> 
        </div>        
    );
};
//https://www.youtube.com/watch?v=Uz35Qiia84g
//https://www.youtube.com/watch?v=kxgFtMIKGks