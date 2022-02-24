import React from 'react';

function WelcomeTitleDiv() {
  axios({
    method:'get',
    url:'https://kls-hospital-management-system.herokuapp.com/StartServer',
    data: {
            }
    })
    .then((response)=> {
    }, (error) => {
    });
  return <div className="WelcomeTitleDiv">
      <div className='WelcomeTitleDivContent'>KLS HOSPITAL MANAGEMENT SYSTEM</div>
  </div>;
}

export default WelcomeTitleDiv;
