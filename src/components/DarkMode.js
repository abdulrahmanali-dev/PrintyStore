import React from "react";
import { ReactComponent as Sun } from "../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../assets/images/Moon.svg";
import "../styles/DarkMode.css";

const DarkMode = () => {
    const setDarkMode = ()=> {
        document.querySelector('body').setAttribute('data-theme','dark')
    }
    const setLightMode = ()=> {
        document.querySelector('body').setAttribute('data-theme','light')
    }
    const toggleTheme = (e)=> {
        if  (e.target.checked) setDarkMode()
        else setLightMode()
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
            </label>
        </div>
    );
};

export default DarkMode;
