const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.write('Hello World!');
    res.end();
});

app.listen(port, () => {
    console.log(`Portfolio web-app listening at http://localhost:${port}`);
});
