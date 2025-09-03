const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs());
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', (req, res) => {
  res.render('forbidden', { layout: false });
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.render('home', { layout: false });
});

app.get('/about', (req, res) => {
  res.render('about', { layout: false });
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.use((req, res) => {
  res.render('404', { layout: false });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
