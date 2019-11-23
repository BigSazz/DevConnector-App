const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

// Body Parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 App is running on port: ${PORT}`.cyan);
});
