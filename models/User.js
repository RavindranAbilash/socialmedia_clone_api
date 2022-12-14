const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        min:3,
        max:20,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        max:50
    },
    password:{
        type:String,
        required: true,
        min:6
    },
    profilePic:{
      type:String,
      default:"",
    },
    coverPic:{
        type:String,
        default:"",
    },
    followers:{
      type:Array,
      default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},
{timestamps:true}
)

module.exports = mongoose.model("User",userSchema)