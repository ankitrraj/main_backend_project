import mongoose, { Schema } from "mongoose";
import { jwt } from "jsonwebtoken";
import bcrypt from 'bcrypt'

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,   //  // the index true is helpp t sech item in database and the your main search events helps to search
        trim:true           
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,         
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true

    },
    avatar:{
        type :String,   //its has only a cloudflare url
        required:true
    },
    coverimage:{
        type:String
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref :"Video"
    }],
    password:{
        type:String,
        required:[true, 'password is required']
    },
    refreshToken:{
        type:String
    }
    
}, { timestamps: true })

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password =bcrypt.hash(this.password,10)
    next()
    


})

userSchema.methods.ispasswordCorrect  =async function name(password) {
     return await bcrypt.compare(password,this.password)
    
}

userSchema.methods.genrateAccessToken =function (){
    jwt.sign(
        {
        _id :this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}

userSchema.methods.genrateRefreshToken =function () {
    jwt.sign(
        {
        _id :this._id,
        
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }

    )


}
export const User = mongoose.model("User", userSchema)
