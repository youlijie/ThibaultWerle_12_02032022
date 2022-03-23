import React from 'react';

/**
 * NavBar
 * @component
 * @example
 * return (
 *   <NavBar/>
 * )
 * @returns {React.Component}
 * @public
 * @returns {JSX}
 */

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <a href="/">Accueil</a>
                <a href="/">Profil</a>
                <a href="/">Réglage</a>
                <a href="/">Communauté</a>
            </div>
        </div>
    );
};

export default NavBar;