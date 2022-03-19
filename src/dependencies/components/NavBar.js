import React from 'react';

/**
 * 
 * @param {*} param0 
 * @public
 * @returns {JSX}
 */

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <a href="/">Acceuil</a>
                <a href="/">Profil</a>
                <a href="/">Réglage</a>
                <a href="/">Communauté</a>
            </div>
        </div>
    );
};

export default NavBar;