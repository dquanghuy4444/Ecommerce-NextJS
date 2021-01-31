import React from 'react';
import Modal from './modal';
import Navbar from './navbar';
import Notify from './notify';

function Layout ({children}){
    return (
        <div className="container">

            <Navbar></Navbar>

            <Notify></Notify>

            <Modal></Modal>
            
            {
                children
            }
        </div>
    )
}

export default Layout;