import PropTypes from "prop-types"
import React from 'react';

const Welcome = ({datas}) => {

    return (
        <div className='welcome'>
            <h1>Bonjour <span>{datas.user?.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

Welcome.propTypes = {
  datas: PropTypes.shape({
    user: PropTypes.shape({
      userInfos: PropTypes.shape({
        firstName: PropTypes.any
      })
    })
  })
}

export default Welcome;