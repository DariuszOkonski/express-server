const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/user', (req, res) => {
  res.render('forbidden');
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.render('home', { layout: 'dark' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});

app.post('/contact/send-message', (req, res) => {
  const { author, sender, title, message } = req.body;

  if (author && sender && title && message) {
    res.render('contact', { isSent: true });
  } else {
    res.render('contact', { isError: true });
  }
});

app.use((req, res) => {
  res.render('404');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
