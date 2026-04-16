const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => { 
  res.send('ShipFast deployed via CI/CD using SSM by Horacio  ✅'); 
}); 
app.get('/health', (req, res) => { 
  res.status(200).send('OK'); 
}); 
app.listen(3060, () => { 
  console.log('App running on port 3060'); 
}); 
