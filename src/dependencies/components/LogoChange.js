import React from 'react';
import logo from '../assets/logo/logo.png';

/**
 * LogoChange
 * @component
 * @example
 * return (
 * <LogoChange/>
 * )
 * @returns {React.Component}
 * @public
 * @returns {JSX}
 * @param {string} userId
 * @param {function} setUserId
 * @param {function} handleClick
 */

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