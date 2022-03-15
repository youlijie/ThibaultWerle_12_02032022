import axios from 'axios';

export let newUserData = {}

/**
 * 
 * @param {*} userid 
 */

export const apiCall = async (userid) => {
    await axios.get(`http://localhost:3000/user/${userid}`)
        .then(function (response) {
            newUserData.user = response.data.data;
            console.log(newUserData)
        })
    await axios.get(`http://localhost:3000/user/${userid}/activity`)
        .then(function (response) {
            newUserData.activity = response.data.data;
        })
    await axios.get(`http://localhost:3000/user/${userid}/average-sessions`)
        .then(function (response) {
            newUserData.session = response.data.data;
        })
    await axios.get(`http://localhost:3000/user/${userid}/performance`)
        .then(function (response) {
            newUserData.performance = response.data.data;
        })
    console.log(newUserData, 'userData');   
    }             
