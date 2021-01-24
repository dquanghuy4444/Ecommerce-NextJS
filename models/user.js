import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: String,
        default: 'user'
    },
    root:{
        type: Boolean,
        default: false
    },
    avatar:{
        type: String,
        default: "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
    }
},  {
    timestamps: true
})

let dataset = mongoose.models.user || mongoose.model("user" , userSchema);

export default dataset;