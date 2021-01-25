import Users from '../../../models/user';
import connectDB from '../../../ultis/connect-database';
import bcrypt from 'bcrypt';
import { createAccessToken } from '../../../ultis/generate-token';
import jwt from 'jsonwebtoken';

connectDB()

export default async (req , res) =>{
    try {
        const refreshToken = req.cookies.refreshtoken;
        if(!refreshToken){
            return res.status(400).json({
                err:"Please login now"
            })
        }

        const result = jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET)
        if(!result){
            return res.status(400).json({
                err:"Your token is incorrect or has expired"
            })
        }

        const user = await Users.findById(result.id)
        if(!user){
            return res.status(400).json({
                err:"User does not exist"
            })
        }

        const accessToken = createAccessToken({
            id: user._id
        })

        res.json({
            accessToken,
            user:{
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root
            }
        })
    } catch (error) {
        return res.status(500).json({
            err:error.message
        })
    }
}
