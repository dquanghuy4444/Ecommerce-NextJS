import Head from 'next/head';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import validRegister from '../ultis/valid-register';
import { DataContext } from '../store/global-state';
import { postData } from '../ultis/fetch-data';

const styleForm={
    maxWidth:'500px'
}

const styleTagA={
    color:'crimson'
}

function Register (){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    const [state , dispatch] = useContext(DataContext);

    const handleChangeInput = (e) =>{
        const { name , value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirm_password":
                setConfirmPassword(value);
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
        const errMess = validRegister(name , email , password , confirmPassword);
        if(errMess){
            return dispatch({
                type:"NOTIFY",
                payload:{
                    error: errMess
                }
            })
        }

        dispatch({
            type:"NOTIFY",
            payload:{
                loading: true
            }
        })

        const res = await postData('auth/register' , { name , email , password , confirmPassword })

        if(res.err) return dispatch({ 
            type: 'NOTIFY', 
            payload: {
                error: res.err
            } 
        })

        return dispatch({ 
            type: 'NOTIFY', 
            payload: {
                success: res.msg
            } 
        })
    }

    return (
        <div>
            <Head>
                <title>
                    Register
                </title>
            </Head>

            <form className="mx-auto my-4" style={ styleForm } onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" name="name" value={ name } onChange={ handleChangeInput } aria-describedby="emailHelp" placeholder="Enter name"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"  value={ email } onChange={ handleChangeInput } aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password"  value={ password } onChange={ handleChangeInput } placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" name="confirm_password"  value={ confirmPassword } onChange={ handleChangeInput } placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <p className="my-2">
                    Already have an account ?
                    <Link href="/signin">
                        <a style={ styleTagA }>
                            Login Now
                        </a>    
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register;