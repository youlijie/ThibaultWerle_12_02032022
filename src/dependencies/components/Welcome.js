import PropTypes from "prop-types"
import React from 'react';

/**
 * Welcome
 * @component
 * @example
 * return (
 *    <Welcome datas={this.state}/>
 * )
 * @param {object} datas
 * @param {string} datas.user.userInfos.firstName
 * @returns {React.Component}
 * @public
 * @returns {JSX}
 */


const Welcome = ({datas}) => {

    return (
        <div className='welcome'>
            <h1>Bonjour <span>{datas.user?.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

Welcome.propTypes = {
  /** 
   * Import datas from props
   */
  datas: PropTypes.shape({
    user: PropTypes.shape({
      userInfos: PropTypes.shape({
        firstName: PropTypes.any
      })
    })
  })
}

export default Welcome;