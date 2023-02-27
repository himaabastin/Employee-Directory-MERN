const mongoose = require("mongoose");

//employee model

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    employeeId:{
        type:String,
        required:true,
        unique:true
    },
    jobTitle: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: Array, //email,mobile
      required: true,
    },
    history: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employes", employeeSchema);
