import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

function Navbar (){
    const router = useRouter();

    const isActive = (r) =>{
        if(r === router.pathname){
            return "active";
        }
        return "";
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand" href="#">Dashboard</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/cart">
                            <a className={ "nav-link " + isActive("/cart") } href="">
                                <i className="fas fa-shopping-cart"></i>
                                Cart
                                </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/signin">
                            <a className={ "nav-link " + isActive("/signin") } href="">
                                <i className="fas fa-user"></i>
                                Sign in
                                </a>
                        </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    )
}

export default Navbar;