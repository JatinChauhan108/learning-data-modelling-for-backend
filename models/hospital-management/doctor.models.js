import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },

  salary : {
    type : Number,
    required : true
  },

  qualification : {
    type : String,
    required : true
  },

  experienceInYears : {
    type : Number,
    default : 0
  },

  worksInHospitals : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Hospital'
    }
  ],

  phone : {
    type : Number,
    required : true,
    unique : true
  },

  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true
  }
},{timestamps : true});

export const Doctor = mongoose.model('Doctor', doctorSchema);