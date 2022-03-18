import React from 'react';
import yoga from '../assets/nav-icon/yoga.png';
import swim from '../assets/nav-icon/swim.png';
import cycle from '../assets/nav-icon/cycle.png';
import strength from '../assets/nav-icon/strength.png';

/**
 * 
 * 
 */

const NavBarSide = () => {
    return (
        <div className='navbarside'>
        <div></div>
            <div className='icon'>
                <div className='iconcontainer'>
                    <img src={yoga} alt="yoga" />
                </div>
                <div className='iconcontainer'>
                    <img src={swim} alt="swim" />
                </div>
                <div className='iconcontainer'>
                    <img src={cycle} alt="cycle" />
                </div>
                <div className='iconcontainer'>
                    <img src={strength} alt="strength" />
                </div>
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    );
};

export default NavBarSide;