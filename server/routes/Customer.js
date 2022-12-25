const express = require('express');
const router = express.Router();
const Customer = require('../services/Customer');

//GETALL Users
router.get('/getUsers', async function(req, res) {
  try {
    res.json(await Customer.getUsers(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
  }
});
//GET Status
router.get('/getStatus', async function(req, res) {
  try {
    res.json(await Customer.getStatus(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
  }
})
//ADD User
router.post('/addUser', async function(req, res) {
  try {
    res.json(await Customer.addUser(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
  }
})
//UPDATE User
router.put('/updateUser/:id', async function(req, res) {
  try {
    res.json(await Customer.updateUser(req.params.id,req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
  }
})
//DELETE User
router.delete('/deleteUser/:id', async function(req, res) {
  try {
    res.json(await Customer.deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
  }
})

module.exports = router;