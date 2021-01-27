import React from 'react';
import Navbar from './navbar';
import Notify from './notify';

function Layout ({children}){
    return (
        <div className="container">

            <Navbar></Navbar>

            <Notify></Notify>
            
            {
                children
            }
        </div>
    )
}

export default Layout;