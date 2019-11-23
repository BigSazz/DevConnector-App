const express = require('express');
const colors = require('colors');

const app = express();

// Body Parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 App is running on port: ${PORT}`.cyan);
});
