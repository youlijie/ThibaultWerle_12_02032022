import React, { useEffect, useState } from 'react';
import { apiCall, newUserData } from '../../api-call/apiCall';
import RadialProgress from '../components/RadialProgress';

const Hub = () => {
    const [datas, setDatas] = useState([]);
    const [userid, setUserid] = useState('12');

    useEffect(() => {
        async function fetchData() {
            await apiCall(userid);
            setDatas(newUserData);
            console.log(newUserData, 'userData2');
        }
        fetchData();
    }, [userid]);

    return (
        <div>
            <RadialProgress datas={datas} />
        </div>
    );
};

export default Hub;