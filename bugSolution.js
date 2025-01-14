const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user details using userId ...
  if (!user) {
    return res.status(404).json({ error: 'User not found' }); //Corrected response
  }
  res.json(user);
});