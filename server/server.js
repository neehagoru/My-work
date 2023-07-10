const express = require('express');
const fs = require('fs');

 

const app = express();
app.use(express.json());

 

app.post('/api/register', (req, res) => {
  const user = req.body;
  const jsonData = JSON.stringify(user, null, 2);

 

  fs.writeFile('data.json', jsonData, err => {
    if (err) {
      console.error('Error saving data to data.json:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Data saved to data.json:', user);
      res.json({ message: 'Data saved successfully' });
    }
  });
});

 

app.listen(3000, () => {
  console.log('Server running on http://localhost:8080');
});