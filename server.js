const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };

  next();
});

app.use('/user', (req, res, next) => {
  res.show('forbidden.html');
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.show('home.html');
});

app.get('/home', (req, res) => {
  res.show('home.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
