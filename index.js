const express = require('express');

const auth = require('./auth');

const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticator</a>');
});

app.get('/protected', (req, res) => {
    res.send('Hello!');
});

app.listen(5000, () => console.log('listening on port: 5000'))