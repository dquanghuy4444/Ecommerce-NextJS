import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useContext, useState , useEffect } from 'react';
import { DataContext } from '../store/global-state';
import { postData } from '../ultis/fetch-data';
import Cookie from 'js-cookie';

const styleForm={
    maxWidth:'500px'
}

const styleTagA={
    color:'crimson'
}

function Signin(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const {state , dispatch} = useContext(DataContext);
    const { auth } = state;

    const router = useRouter();

    useEffect(() => {
        if(Object.keys(auth).length !== 0){
            router.push("/")
        }
    }, [auth])

    const handleChangeInput = (e) =>{
        const { name , value } = e.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;     
            default:
                break;
        }
        
        dispatch({
            type:"NOTIFY",
            payload:{}
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
 
        dispatch({
            type:"NOTIFY",
            payload:{
                loading: true
            }
        })

        const res = await postData('auth/login' , { email , password })

        if(res.err) return dispatch({ 
            type: 'NOTIFY', 
            payload: {
                error: res.err
            } 
        })

        dispatch({ 
            type: 'NOTIFY', 
            payload: {
                success: res.msg
            } 
        })

        dispatch({ 
            type: 'AUTH', 
            payload: {
                token: res.accessToken,
                user: res.user
            } 
        })

        Cookie.set("refreshtoken" , res.refreshToken , {
            path:'api/auth/accesstoken',
            expires:7
        })

        localStorage.setItem("firstlogin" , true);
    }


    return (
        <div>
            <Head>
                <title>
                    Sign in Page
                </title>
            </Head>

            <form className="mx-auto my-4" style={ styleForm } onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="email" value={ email } onChange={ handleChangeInput } id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" value={ password } onChange={ handleChangeInput } id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className="my-2">
                    You don't have an account?
                    <Link href="/register">
                        <a style={ styleTagA }>
                            Register
                        </a>    
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Signin;