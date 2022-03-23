import React, { useEffect, useState } from 'react';
import { apiCall, newUserData } from '../../api-call/apiCall';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../../api-call/data';
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
    const newUserDataMock = { user : USER_MAIN_DATA, activity: USER_ACTIVITY, session: USER_AVERAGE_SESSIONS, performance: USER_PERFORMANCE }; 

    useEffect(() => {
        async function fetchData() {
            await apiCall(userId);
            console.log(newUserData , 'newUserData');
            if (!newUserData.user) {
                console.log(newUserDataMock , 'newUserData2');
                setDatas(() => ({...newUserDataMock}))
            } else {
                setDatas(() => ({...newUserData}))
            }
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