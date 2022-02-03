import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AddAlert from '@mui/icons-material/AddAlert';

export const SidebarData =  [

{
    title: "Home",
    icon: <HomeIcon/>,
    link: "/home"
}
,
{
    title: "Mail",
    icon: <MailIcon/>,
    link: "/mail"
}
,
{
    title: "Airport",
    icon: <AirportShuttleIcon/>,
    link: "/airport"
}
,
{
    title: "Account",
    icon: <AccountCircleIcon/>,
    link: "/account"
},
{
    title: "Notification",
    icon: <AddAlert/>,
    link: "/notification"
}
,
{
    title: "Logout",
    icon: <LogoutIcon/>,
    link: "/logout"
}
]

