import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";


export const SidebarData = [

{
    title:"OverView",
    path:'/',
    icon:<AiIcons.AiOutlineFundView/>,
    cName:"nav-text"
},

{
    title:"Calendar",
    path:'/calender',
    icon:<AiIcons.AiOutlineCalendar/>,
    cName:"nav-text"
},

{
    title:"Patient List",
    path:'/plist',
    icon:<AiIcons.AiOutlineUser/>,
    cName:"nav-text"
},

{
    title:"Message",
    path:'/mess',
    icon:<AiIcons.AiOutlineMessage/>,
    cName:"nav-text"
},

{
    title:"Payment Info",
    path:'/payment',
    icon:<MdIcons.MdOutlinePayment/>,
    cName:"nav-text"
},

{
    title:"Setting",
    path:'/setting',
    icon:<AiIcons.AiFillSetting/>,
    cName:"nav-text"
}



]
  
