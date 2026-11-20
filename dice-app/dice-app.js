let express = require('express');
let path = require('path');
let app = express();
let rollDice = require('./functions');
let port = 9000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'files')));
app.get('/roll', (req, res) => {
  let num = rollDice();
  res.send('You rolled a ' + num);
});
app.get('/dicepage', (req, res) => {
  let num = rollDice();
  res.render('dicepage', { number: num });
});
app.listen(port, () => {
  console.log('Running on port: ' + port);
});
