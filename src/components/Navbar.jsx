// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//     const list =
//         <>
//             <li><Link href={'/'}>Home</Link></li>
//             <li><Link href={'/explore'}>Explore Artworks</Link></li>
//             <li><Link href={'/add'}>Add Artwork</Link></li>
//             <li><Link href={'/gallery'}>My Gallery</Link></li>
//             <li><Link href={'/favorites'}>My Favorites</Link></li>
//         </>
//     return (
//         <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {
//                             list
//                         }
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {
//                         list
//                     }
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//         </div>
//     )
// }

// export default Navbar

"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from 'react'
import { CiLogout } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";




export default function Navbar() {
    const { data: session, status } = useSession();
    const list =
        session ?
            <>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/explore'}>Explore Artworks</Link></li>
                <li><Link href={'/add'}>Add Artwork</Link></li>
                <li><Link href={'/manage'}>Manage Arts</Link></li>
                <li><Link href={'/favorite'}>My Favorites</Link></li>
            </> :
            <>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/explore'}>Explore Artworks</Link></li>
            </>

    console.log(session?.user)
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            list
                        }
                    </ul>
                </div>
                <a className="btn text-green-600 font-black btn-ghost text-xl">ARTIFY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        list
                    }
                </ul>
            </div>
            <div className="navbar-end flex">

                <div className="mx-2">
                    {session ? (
                        <div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-field text-2xl"><MdManageAccounts />*{session?.user?.name}*</div>
                                <ul
                                    tabIndex="-1"
                                    className="menu text-center dropdown-content bg-base-200 rounded-box z-1 mt-4 w-auto p-2 shadow-sm">
                                    <li><a>{session?.user?.email}</a></li>
                                    <div className="flex font-black justify-between items-center text-2xl">

                                        <li><Link href={'/add'}><IoIosAddCircle /></Link></li>
                                        <li><Link href={'/manage'}><MdManageHistory /></Link></li>

                                        <li onClick={() => signOut()}>
                                            <a><CiLogout /></a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link className="btn" href={'/login'}>Login/Register</Link>
                    )}
                </div>

            </div>
        </div>
    )
}



