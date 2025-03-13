require('dotenv').config();
const express = require('express');
const connectDB = require('./config.js');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
