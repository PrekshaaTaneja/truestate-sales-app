const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const Sales = require("../models/Sales");

// CONNECT TO DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Import"))
  .catch((err) => console.error("DB Connect Error:", err));

const csvFilePath = path.join(__dirname, "../dataset/sales.csv");

// First remove previous data
(async () => {
  try {
    await Sales.deleteMany({});
    console.log("Old data cleared.");
  } catch (error) {
    console.log("Error clearing:", error);
  }
})();

let count = 0;

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", async (row) => {
    // convert row -> object
    const doc = {
      // Customer
      customerId: row["Customer ID"],
      customerName: row["Customer Name"],
      phoneNumber: row["Phone Number"],
      gender: row["Gender"],
      age: Number(row["Age"]),
      customerRegion: row["Customer Region"],
      customerType: row["Customer Type"],

      // Product
      productId: row["Product ID"],
      productName: row["Product Name"],
      brand: row["Brand"],
      productCategory: row["Product Category"],
      tags: row["Tags"] ? row["Tags"].split(",").map((t) => t.trim()) : [],

      // Sales
      quantity: Number(row["Quantity"]),
      pricePerUnit: Number(row["Price per Unit"]),
      discountPercentage: Number(row["Discount Percentage"]),
      totalAmount: Number(row["Total Amount"]),
      finalAmount: Number(row["Final Amount"]),

      // Operational
      date: new Date(row["Date"]),
      paymentMethod: row["Payment Method"],
      orderStatus: row["Order Status"],
      deliveryType: row["Delivery Type"],
      storeId: row["Store ID"],
      storeLocation: row["Store Location"],
      salespersonId: row["Salesperson ID"],
      employeeName: row["Employee Name"],
    };

    try {
      await Sales.create(doc); // insert one row at a time
      count++;
      if (count % 500 === 0) console.log(`Inserted: ${count}`);
    } catch (error) {
      console.log("Error inserting row:", error);
    }
  })
  .on("end", () => {
    console.log(`Import Completed. Total rows: ${count}`);
    mongoose.connection.close();
  });
