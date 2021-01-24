import React from 'react';
import Navbar from './Navbar';
import Notify from './Notify';

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