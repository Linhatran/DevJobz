const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static(path.join(__dirname, '../build')));
//app("/api/")
app.listen(3000, () => console.log('listening on port 3000...')); //listens on port 3000 -> http://localhost:3000/
