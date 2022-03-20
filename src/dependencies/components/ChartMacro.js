import PropTypes from "prop-types"
import React, { useEffect, useState } from "react";
import apple from "../assets/diet-icon/apple.png";
import cheeseburger from "../assets/diet-icon/cheeseburger.png";
import chicken from "../assets/diet-icon/chicken.png";
import fire from "../assets/diet-icon/fire.png";

/**
 * ChartMacro
 * @component
 * @example
 * return (
 * <ChartMacro datas={this.state}/>
 * )
 * @param {object} datas
 * @param {string} datas.user.keyData.calorieCount
 * @param {string} datas.user.keyData.proteinCount
 * @param {string} datas.user.keyData.carbohydrateCount
 * @param {string} datas.user.keyData.lipidCount
 * @returns {React.Component}
 * @public
 * @returns {JSX}
 */

const ChartMacro = ({ datas }) => {
  const [Macro, setMacro] = useState([]);

  // Get data from props
  useEffect(() => {
    if (datas.user?.keyData) {
      setMacro(datas.user?.keyData);
    }
  }, [datas]);

  console.log(Macro, "Macro");

  return (
    <div className="macro">
      <div className="macrocontainer">
        <div className="imgcal">
          <img src={fire} alt="calories" />
        </div>
        <div className="macrotext">
          <h2>{Macro.calorieCount}kCal</h2>
          <p>Calories</p>
        </div>
      </div>
      <div className="macrocontainer">
        <div className="imgprot">
          <img src={chicken} alt="proteines" />
        </div>
        <div className="macrotext simple">
          <h2>{Macro.proteinCount}</h2>
          <p>Proteines</p>
        </div>
      </div>
      <div className="macrocontainer">
        <div className="imgglu">
          <img src={apple} alt="glucides" />
        </div>
        <div className="macrotext simple">
          <h2>{Macro.carbohydrateCount}</h2>
          <p>Glucides</p>
        </div>
      </div>
      <div className="macrocontainer">
        <div className="imglip">
          <img src={cheeseburger} alt="lipides" />
        </div>
        <div className="macrotext simple">
          <h2>{Macro.lipidCount}</h2>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};

ChartMacro.propTypes = {
  datas: PropTypes.shape({
    user: PropTypes.shape({
      keyData: PropTypes.any
    })
  })
}

export default ChartMacro;
