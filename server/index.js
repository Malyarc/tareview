const express = require('express');
const userdb = require('../database/index')
const bodyParser = require('body-parser');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/create', (req, res) => {

  // var data = {
  //     name: 'test',
  //     email: 'Test@Test.com',
  //     password: 'Testerpass',
  // };

  userdb.user.create(req.body, (err) => {
    if (err) {
        console.log(err);
      console.log('error in userdb.user.create()');
      res.sendStatus(404);

    } else {

        res.statusCode = 201;
        res.json(req.body);
    }
  });

});

app.post('/update', (req, res) => {


  });

app.get('/findone', (req, res) => {



});

app.get('/findall', (req, res) => {



});



let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});