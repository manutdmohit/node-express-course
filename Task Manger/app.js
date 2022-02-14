const express = require('express');
const app = express();

const port = 8000;

const tasks = require('./routes/tracks');

// middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tracks', tasks);

app.listen(port, console.log(`Server is listening on port ${port}`));
