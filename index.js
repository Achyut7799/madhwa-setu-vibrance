const express = require('express');
const app = express();
const port = 3000;  // You can choose any port

app.get('/', (req, res) => {
  res.send('🚀 Project1 is running on localhost!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
