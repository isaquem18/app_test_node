const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Article = require('./articles/article');
const Category = require('./categories/category');

connection
  .authenticate()
  .then(() => console.log('CONNECTION IS ON!'))
  .catch(() => console.log('CONNECTION ERROR!'));

// VIEW ENGINE
app.set('view engine', 'ejs');

//STATIC
app.use(express.static('public'));

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//-----  ROTAS

app.get('/', (req, res) => {
  res.render('index');
});

const categoriesController = require('./categories/categoriesController');
app.use('/', categoriesController);

const articlesController = require('./articles/articlesController');
app.use('/', articlesController);


app.listen(port, (error) => {
  if (error) {
    console.log('SERVER ERROR!');
  } else {
    console.log('SERVER STARTED!');
  };
});