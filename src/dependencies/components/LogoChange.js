import React from 'react';
import logo from '../assets/logo/logo.png';

const LogoChange = ({userId, setUserId}) => {

    // on image click, change userid from 12 to 18 and refresh data
    const handleClick = () => {
        setUserId(userId === '12' ? '18' : '12');
    };

    return (
        <div className="logo">
            <img src={logo} alt="logo" onClick={handleClick}/>
        </div>
    );
};
export default LogoChange;