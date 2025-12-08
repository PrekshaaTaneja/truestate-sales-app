const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema(
  {
    // Customer Information
    customerId: String,
    customerName: String,
    phoneNumber: String,
    gender: String,
    age: Number,
    customerRegion: String,
    customerType: String,

    // Product Information
    productId: String,
    productName: String,
    brand: String,
    productCategory: String,
    tags: [String],

    // Sales Data
    quantity: Number,
    pricePerUnit: Number,
    discountPercentage: Number,
    totalAmount: Number,
    finalAmount: Number,

    // Operational Fields
    date: Date,
    paymentMethod: String,
    orderStatus: String,
    deliveryType: String,
    storeId: String,
    storeLocation: String,
    salespersonId: String,
    employeeName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales", SalesSchema);
