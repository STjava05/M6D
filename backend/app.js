
const express = require('express');
const app = express();
const userCtrl = require('./controllers/user');


// Rimuovi la riga console.log(userCtrl.createUser);
app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.getAllUser);
app.get('/api/user/:id', userCtrl.getOneUser);
app.patch('/api/user/:id', userCtrl.modifyUser);
app.delete('/api/user/:id', userCtrl.deleteUser);




module.exports = app;
