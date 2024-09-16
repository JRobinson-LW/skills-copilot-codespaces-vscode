// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.status(201).send('New comment created');
});

// Get a comment
app.get('/comments/:id', (req, res) => {
  res.send('Get comment with id: ' + req.params.id);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Update comment with id: ' + req.params.id);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.status(204).send('Delete comment with id: ' + req.params.id);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});