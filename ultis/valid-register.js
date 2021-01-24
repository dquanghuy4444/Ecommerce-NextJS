const validRegister = (name , email , password , confirm_password) =>{
    if(!name || !email || !password){
        return "Please add all fields";
    }
    
    if(!validateEmail(email)){
        return "Please invaild email";
    }

    if(password.length < 6){
        return "Password must be at least 6 characters";
    }

    if(password !== confirm_password){
        return "Confirm password did not match";
    }

}

function validateEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

export default validRegister;