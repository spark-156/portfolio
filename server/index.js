const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Console log that server is up
app.listen(port, () => console.log(`Portfolio web-app listening at http://localhost:${port}`));

// Hello word 
app.get('/helloworld', (req, res) => {
    res.send({ string: 'Hello World!' });
});

// Express backend is up and running
app.get('/express_backend', (req, res) => {
    res.send({ express: 'Yeah it is!' });
});
