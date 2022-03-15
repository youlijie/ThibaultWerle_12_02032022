import React, { useEffect, useState } from 'react';
import { apiCall, newUserData } from '../../api-call/apiCall';
import BarChartBody from '../components/BarChartBody';
import ChartMacro from '../components/ChartMacro';
import LineChartTime from '../components/LineChartTime';
import LogoChange from '../components/LogoChange';
import NavBar from '../components/NavBar';
import NavBarSide from '../components/NavBarSide';
import RadarChartPerf from '../components/RadarChartPerf';
import RadialProgress from '../components/RadialProgress';
import Welcome from '../components/Welcome';

const Hub = () => {
    const [datas, setDatas] = useState({});
    const [userId, setUserId] = useState('12');

    useEffect(() => {
        async function fetchData() {
            await apiCall(userId);
            setDatas(() => ({...newUserData}) );
            console.log(newUserData, 'userData2');
        }
        fetchData();
        
    }, [userId]);

    

    return (
        <div>
            <LogoChange userId={userId} setUserId={setUserId} />
            <NavBar />
            <NavBarSide />
            <div className="graph">
                <Welcome datas={datas} />
                <BarChartBody datas={datas} />
                <ChartMacro datas={datas} />
                <LineChartTime datas={datas} />
                <RadarChartPerf datas={datas} />
                <RadialProgress datas={datas} />
            </div> 
        </div>
    );
};

export default Hub;