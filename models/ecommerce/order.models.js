import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId : {
    type = mongoose.Schema.Types.ObjectId,
    ref = 'Product'
  },

  quantity : {
    type : Number,
    required : true
  }
})

const orderSchema = new mongoose.Schema({
  orderAmount : {
    type : Number,
    required : true
  },

  orderItems : {
    type : [orderItemSchema]
  },

  orderedBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },

  address : {
    type : String,
    required : true
  },

  status : {
    type : String,
    enum : ["PENDING", "CANCELLED", "DELIVERED"],
    default : 'PENDING'
  }
}, {timestamps : true});

export const Order = mongoose.model('Order', orderSchema);