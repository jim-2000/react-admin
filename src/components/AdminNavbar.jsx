import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';
import { IoIosNotificationsOutline, IoIosCheckmark, IoIosSearch } from "react-icons/io";
import { useLocation } from 'react-router-dom';
 

export default function AdminNavbar( ) {
    const location = useLocation().pathname;
    return (
        <nav className="bg-[#03A9F4] p-1 md:p-0 md:px-1 m-0  overflow-hidden  ">
            <div className="flex flex-col md:flex-row justify-between items-center ">           
                <div className="space-x-3  flex justify-between md:justify-start md:space-x-2 items-center w-full ">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/dashboard/app'
                            ? 'DASHBOARD'
                            : location.toUpperCase().split('/')[2]}
                    </h4>
                        <TextInput 
                        className='bg-[#03A9F4] bg-transparent w-full focus:ring-0 focus:border-none outline-none'
                        id="searchText"
                        type="text"
                        icon={IoIosSearch}
                        placeholder="Search"
                        required={true}
                        
                        />   
                </div>
                <div className="flex items-center  w-full space-x-1 md:space-x-2 justify-end  my_drp">
                    <Dropdown
                    placement='bottom-end'
                    color="transparent"
                    arrowIcon={true}
                    label={
                        <Avatar 
                        img={'/assets/imgs/engflag.png'}
                        rounded={false}
                        size={'xs'}
                        />
                    }
                    className='p-0'
                    >
                        <DropdownItem icon={IoIosCheckmark} >
                            English
                        </DropdownItem>
                        <DropdownItem >
                           বাংলা
                        </DropdownItem>
                        <DropdownItem >
                         French
                        </DropdownItem>
                    </Dropdown>
                    <Dropdown
                    placement='bottom-end'
                    color="red"
                    arrowIcon={false}
                    itemScope={true}
                    label={
                        <span className='text-primary text-2xl w-6 h-6 rounded-full shadow bg-dark text-center relative '>
                            <IoIosNotificationsOutline />
                            <span className='h-2 w-2 rounded-full bg-teal-500 absolute bottom-0 -right-1'></span>
                        </span>
                    }
                    className='p-0'
                    >
                        <DropdownItem icon={IoIosCheckmark} >
                            English
                        </DropdownItem>
                       
                    </Dropdown>
                   <Dropdown
                    placement='auto'
                    color="transparent"
                        arrowIcon={false}
                        label={
                            <Avatar 
                            img={'https://flowbite.com/docs/images/people/profile-picture-5.jpg'}
                            rounded={true}
                            bordered={true}
                            color="gray"
                            />
                        }
                        className='p-0'
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                            Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                            bonnie@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <DropdownItem color="lightBlue">
                            Action
                        </DropdownItem>
                        <DropdownItem color="lightBlue">
                            Another Action
                        </DropdownItem>
                        <DropdownItem color="red" className='bg-dark text-primary'>
                            Something Else
                        </DropdownItem>
                    </Dropdown>
            
                </div>
            </div>
    
    </nav>
    );
}
