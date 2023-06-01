var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

function soma(a, b) {
    return a + b;
  }
function subtracao(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  });
  var bodyParser = require('body-parser');
app.post('/subtracao', function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);

    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado}`);
  });
  var bodyParser = require('body-parser');
app.post('/multi', function (req, res) {
    var body = req.body;
    var resultado = multi(body.a, body.b);

    res.send(`O resultado da multiplicacao de ${body.a} e ${body.b} é ${resultado}`);
  });
  var bodyParser = require('body-parser');
app.post('/div', function (req, res) {
    var body = req.body;
    var resultado = div(body.a, body.b);

    res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado}`);
  });
 
