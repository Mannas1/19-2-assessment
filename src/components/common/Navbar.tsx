import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className=' bg-slate-300 flex items-center justify-between'>
                <div className='py-4 px-2'>
                    <p className='text-2xl'>Home</p>
                </div>
                <div className='py-4 px-2'>
                    <p className='text-lg'><Link to="/">Go to <span className='text-blue-600'>Form</span></Link></p>
                </div>
                <div className='py-4 px-2'>
                    <p className='text-lg'><Link to="/home">Go to <span className='text-green-600'>Home</span></Link></p>
                </div>
                <div className='py-4 px-2 flex items-center gap-2'>
                    <p className='text-xl hover:text-blue-600 hover:cursor-pointer'><Link to="">Check code on github</Link></p>
                    <img width="25" height="25" src="https://img.icons8.com/ios/50/github--v1.png" alt="github--v1"/>
                </div>
            </div>
            
        <div>
        <Outlet />
        </div>            


        </>
    )
}

export default Navbar