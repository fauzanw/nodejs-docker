const express = require('express');
const app     = express();

const {
    APP_PORT
} = process.env

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(APP_PORT, () => console.log(`[+] Server running on port : ${APP_PORT}`))