// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// Models
const AddProject = require('./models/project');
const Contact = require('./models/Contact');

const app = express();
const port = 3000;

// Database Connection - Updated options
mongoose.connect("mongodb+srv://arunvs9744937793:@cluster0.nxde4t4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ... rest of your routes remain exactly the same ...

// Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});