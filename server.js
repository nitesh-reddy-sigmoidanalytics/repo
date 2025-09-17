const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static React build files
app.use(express.static(path.join(__dirname, 'build')));

// Handle SPA routing (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`React app running on port ${PORT}`);
});
