const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

router.get('/chart-data', authenticateToken, (req, res) => {
  try {
    const chartData = {
      growthChart: {
        title: 'Global Electricity Growth (H1 2025)',
        labels: ['Solar Growth', 'Wind Growth', 'Total Demand Growth'],
        data: [306, 97, 369],
        caption: 'Solar and wind generation growth combined (+403 TWh) actually exceeded the total global electricity demand growth (+369 TWh) for the first half of 2025.'
      },
      mixChart: {
        title: 'Global Electricity Generation Share (H1 2025)',
        labels: ['Renewables', 'Coal', 'Gas', 'Nuclear', 'Other Fossil'],
        data: [34.3, 33.1, 23.0, 9.1, 0.5],
        caption: 'This chart illustrates the historic crossover event where Renewables (34.3%) finally surpassed Coal (33.1%) as the leading source of global electricity.'
      }
    };

    res.json(chartData);
  } catch (error) {
    console.error('Chart data error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
