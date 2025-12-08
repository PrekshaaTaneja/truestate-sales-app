const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/sales", require("./routes/salesRoutes"));


app.get('/', (req, res) => {
  res.send('Backend API is running...');
});

const Sales = require('./models/Sales');

app.get('/test-model', async (req, res) => {
  try {
    const doc = await Sales.findOne();
    res.json({ message: "Model is working", sample: doc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
