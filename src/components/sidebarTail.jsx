import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import AdminNavbar from './AdminNavbar';
const SidebarTail = () => {
    const [showSidebar, setShowSidebar] = useState('-left-64');
  return (
    <>
    <AdminNavbar />
        <div
            className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
        >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <NavLink
                                        to="/"
                            // href="/"
                            // target="_blank"
                            // rel="noreferrer"
                            className="mt-2 text-center w-full inline-block"
                    >
                        <h6 color="gray">MUI</h6>
                    </NavLink>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <HiChartPie />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <HiArrowSmRight size={20} />
                                    Settings
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tables"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <HiTable   size={20} />
                                    Tables
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SidebarTail