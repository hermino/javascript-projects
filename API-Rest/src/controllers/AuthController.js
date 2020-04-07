const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (request, response) => {
    try {
        const user = User.create(request.body);
        return response.send({user});
    } catch (err) {
        return response.status(400).send({error: "Registration failed"});
    }
})

module.exports = app => app.use('/auth', router); 