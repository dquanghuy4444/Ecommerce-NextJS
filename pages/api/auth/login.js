import Users from '../../../models/user';
import connectDB from '../../../ultis/connect-database';
import bcrypt from 'bcrypt';
import { createAccessToken , createRefreshToken } from '../../../ultis/generate-token';

connectDB()

export default async (req , res) =>{
    switch (req.method) {
        case "POST":
            await login(req, res)
            break;
    
        default:
            break;
    }
}

const login = async (req , res) =>{
    try {
        const { email , password } = req.body;

        const user = await Users.findOne({ email })
        if(!user) {
            return res.status(400).json({err: 'This email does not exist.'})
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch) {
            return res.status(400).json({err: 'Incorrect password.'})
        }

        const accessToken = createAccessToken({
            id: user._id
        })

        const refreshToken = createRefreshToken({
            id: user._id
        })

        res.json({
            msg: "Login Success",
            accessToken,
            refreshToken,
            user:{
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root
            }
        });
    } catch (error) {
        return res.status(500).json({err: error.message});
    }
}