import React,{ useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
 
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiViewBoards,
    HiInbox,
    HiUsers,
    HiArrowSmRight,
    HiTable  
  } from "react-icons/hi";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { IoIosClose, IoIosMenu, IoIosSearch } from 'react-icons/io';
import { BsSpeedometer } from 'react-icons/bs'
import { Dropdown, TextInput } from 'flowbite-react';
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';
import AdminNavbar from './AdminNavbar';



export default function SidebarNav() {
    const location = useLocation().pathname;
    const { collapseSidebar, collapsed } = useProSidebar();
        // hex to rgba converter
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
 

  const Item = ({name, icon,route}) =>{
      return (
        <MenuItem component={<Link to={route} />} 
        icon={icon}
        className={`uppercase font-semibold text-gray-200 tracking-wide ${route === location ? 'bg-teal-500' : ''} hover:text-primary my-1`}
        active={true}
        >
          {name}
        </MenuItem>
      );
    }
    
    return (
        <div 
        style={{
          position: "sticky",
          display: "flex",
          height: "100vh",
          top: 0,
          bottom: 0,
          zIndex: 10000,
        }} >
        <Sidebar  transitionDuration={1000} 
        backgroundColor='#2B2D42'
        className='h-screen'
        >
        <div className='flex items-center justify-between m-2 border-b-2 border-gray-200 '>          
          {
              collapsed ? <p></p> : <p className='text-xl font-bold text-secondary uppercase tracking-wider'>Pro Sidebar </p>          
          }
          <Menu iconShape="circle">
            <button onClick={() => collapseSidebar()}>
              {
              collapsed ?  
              <IoIosMenu 
                size={24}
                color='white'
                className='bg-purple-600 rounded-full w-8 h-8 p-1 hover:scale-110 transform duration-150'
              /> :  
              <IoIosClose 
                color='white'
                size={40}    
                className='bg-purple-600 rounded-full w-8 h-8 p-1 hover:rotate-180 transform duration-150'
              />
              }
            </button>
          </Menu>
        </div>
          <Menu className=''
          rootStyles={{
            marginTop:'1px',
            marginBottom:'1px',   
          }}
          // menuItemStyles={menuItemStyles}
          // menuItemStyles={{
            //   root:{
          //     backgroundColor: '#373A5F',
          //     marginTop:'1px',
          //     marginBottom:'1px',
          //     ":hover":{
          //       backgroundColor: '#FFF',
          //       color:"GrayText"
          //     },
          //   },
          //   icon:{
          //     color:"#fff",
          //     fontSize:'22px',
          //     ":hover":{
          //       color:'#373A5F',
          //     }
          //   },
          //   label:{
          //     ":hover":{
          //       letterSpacing: '1.5px',
          //     }
          //   },
            
          // }}
          >
            <Item 
            name={'dahsboard'}
            route={'/dashboard/app'}
            icon={<BsSpeedometer />}
            />
             <Item 
            name={'product'}
            icon={<HiCollection />}
            route={'/dashboard/product'}
            />
             <Item 
            name={'shop'}
            icon={<HiShoppingBag />}
            route={'/shop'}
            />
            <Item 
            name={'User'}
            route={'/dashboard/users'}
            icon={<HiUsers />}
            />
      
         
          </Menu>
          <Menu className='flex flex-col items-center justify-center'
          >
              <div>
                <h1>PRO SIDEBAER</h1>
              </div>
          </Menu>
        </Sidebar>
        <main className='m-0 h-full w-full overflow-x-hidden'>
          <AdminNavbar />
          <Outlet />
        </main>
      </div>
    );
}

 