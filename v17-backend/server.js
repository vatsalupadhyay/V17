const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRoutes);
app.use('/api', dataRoutes);

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'V17 Backend API is running',
    student: 'Vatsal Kalpesh Upadhyay',
    studentId: '801478817'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`V17 Backend server running on port ${PORT}`);
  console.log(`Student: Vatsal Kalpesh Upadhyay (801478817)`);
  console.log(`Topic: Clean Energy Dashboard`);
});
