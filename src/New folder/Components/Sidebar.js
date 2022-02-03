import { ClassNames } from '@emotion/react';
import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

function Sidebar() {
    return (
    <div className='Sidebar'>
        <ul className='SidebarList'>
        {SidebarData.map((val,key)=>{
        return (
        <li key={key} 
        className='row'
        id={window.location.pathname==val.link ? "active": ""}
        onClick={()=>{window.location.pathname = val.link}}> 
        <div id="icon">{val.icon}</div>
        <div id='title'>{val.title}</div>        
        </li>);
    })}
    </ul>
    <div  className='boxes'>
        <div className='bc1'>
            <div className='b1'><div className='bx1'></div></div>
            <div className='b2'><div className='bx2'></div></div>
        </div>
        <div className='bc2'>
            <div className='b3'><div className='bx3'></div></div>
            <div className='b4'><div className='bx4'></div></div>
        </div>
        <div className='bc3'>
        <div className='bx'>
        <div className='b5'>
            <CoronavirusIcon className='coronaIcon'/>
            
        </div>
        <div className='b6'>
        <div className='coronainfo'>
            <h3 id="live">LIVE</h3>
            <h4>Corona Covid-19 Tracker</h4>
            <h4>World        : 654567654</h4>
            <h4>India        : 123000</h4>
            <h4>Karnataka    : 15000</h4>
            <h4>Belgaum      : 50</h4>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>);
}

export default Sidebar
