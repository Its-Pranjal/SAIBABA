// import mongoose from "mongoose";

// const roomSchema = mongoose.Schema({

//     name:{
//         type: String,
//         require: true
//     },
//     maxCount :{
//         type: Number,
//         require: true
//     },
//     // phoneNumber:{
//     //     type: Number,
//     //     require: true
//     // },
//     rentPerDay:{
//         type: Number,
//         require: true
//     },
//     imgUrl:[],
//     currentBooking:[],
//     type:{
//         type: String,
//         require: true
//     // },
//     // description:{
//     //     type: String,
//     // }
// },{ timestamps: true})

// const roomModel = mongoose.model('room', roomSchema);

// export default roomModel;

import mongoose from 'mongoose';

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true // 'require' should be corrected to 'required'
    },
    maxcount: {
      type: Number,
      required: true
    },
    
rentperday: {
      type: Number,
      required: true
    },
    imgUrl: [
      {
        type: String // Assuming you want an array of image URLs
      }
    ],
    currentBooking: [],
    type: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const roomModel = mongoose.model('rooms', roomSchema); 

export default roomModel;
