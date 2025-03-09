const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const keyAPI = require('./api/privateKey');

app.use(express.json());
app.use(cors());
// Sample data

app.use('/api', keyAPI);

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
