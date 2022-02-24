import React from 'react';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
function WelcomeDiv() {
  axios({
    method:'get',
    url:'https://kls-hospital-management-system.herokuapp.com/StartServer',
    data: {
            }
    })
    .then((response)=> {
    }, (error) => {
    });
  return <div className='WelcomeDiv'>
        
        <div className='WelcomeDivContentIcon'> <div className='hospitalIconDiv'><LocalHospitalRoundedIcon className="hospitalIcon"/></div></div>
        </div>   
}

export default WelcomeDiv;
