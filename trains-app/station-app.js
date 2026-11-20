let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
let port = 9000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'files')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let trains = [
  { departs: '10:00', platform: 1, stops: [{ name: 'London' }] },
  { departs: '10:15', platform: 2, stops: [{ name: 'Bristol' }] },
  { departs: '10:30', platform: 3, stops: [{ name: 'Cardiff' }] },
  { departs: '10:45', platform: 1, stops: [{ name: 'Plymouth' }] }
];

function getTrains(platform) {
  if (platform) {
    return trains.filter(t => String(t.platform) === String(platform));
  }
  return trains;
}

app.get('/', (req, res) => {
  res.render('trains', { trains: getTrains() });
});

app.post('/filter', (req, res) => {
  let platform = req.body.platform;
  if (!platform) {
    return res.status(400).send('Error - platform required');
  }
  res.render('trains', { trains: getTrains(platform), platform: platform });
});

app.listen(port, () => {
  console.log('Running on port: ' + port);
});
