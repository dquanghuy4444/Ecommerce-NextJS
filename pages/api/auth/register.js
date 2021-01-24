import Users from '../../../models/user';
import Register from '../../register';
import connectDB from '../../../ultis/connect-database';
import validRegister from '../../../ultis/valid-register';
import bcrypt from 'bcrypt';

connectDB()

export default async (req , res) =>{
    switch (req.method) {
        case "POST":
            await register(req, res)
            break;
    
        default:
            break;
    }
}

const register = async (req , res) =>{
    try {
        const { name , email , password , confirmPassword } = req.body;

        const errMess = validRegister(name , email , password , confirmPassword)
        if(errMess){
            return res.status(400).json({err: errMess});
        }

        const user = await Users.findOne({ email })
        if(user) {
            return res.status(400).json({err: 'This email already exists.'})
        }

        const passHash = await bcrypt.hash(password , 12);

        const newUser = new Users({name , email , password: passHash })

        await newUser.save()

        res.json({msg: "Register Success"});
    } catch (error) {
        return res.status(500).json({err: error.message});
    }
}