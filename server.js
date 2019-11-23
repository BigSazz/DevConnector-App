const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

// Body Parser
app.use(express.json());

// Define Routes
app.use('/api/v2/users', require('./routes/api/users'));
// app.use('/api/v2/auth', require('./routes/api/auth'));
// app.use('/api/v2/profile', require('./routes/api/profile'));
// app.use('/api/v2/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 App is running on port: ${PORT}`.cyan);
});
