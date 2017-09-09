var express = require('express');
var app = express();

var contacts = [{
  id: 1,
  name: 'Juan',
  surname: 'Pérez',
  cellPhone: '4444-4444',
  homePhone: '5555-5555',
  workPhone: '6666-6666',
  personalEmail: 'juanperez@gmail.com',
  workEmail: 'juanperez@company.com',
  homeAddress: 'Calle Falsa 123',
  skypeUsername: 'juan.perez',
  facebookUsername: 'jperez',
  notes: 'Lo conozco de la materia Arquitectura Web',
  group: 1
}];

var contactGroup = [{
  id: 1,
  name: 'Arquitectura Web',
  contacts: [1]
}];

app.listen(3000, function () {

  console.log('Servidor up and running...');

});

app.get('/', function (req, res) {

  res.send('Bienvenido a la API de UP Address Book');

});

// contacts:

app.get('/contacts', function (req, res) {

  res.send(contacts);

});

app.post('/contacts', function (req, res) {

  res.send('No implementado');

});

app.get('/contacts/:id', function (req, res) {

  res.send("No implementado");

});

app.put('/contacts/:id', function (req, res) {

  res.send('No implementado');

});

app.delete('/contacts/:id', function (req, res) {

  res.send('No implementado');

});

app.get('/contacts?sort=:sortingCriteria', function (req, res) {

  res.send('No implementado');

});

// contactGroups:

app.get('/contactGroups', function (req, res) {

  res.send(contacts);

});

app.post('/contactGroups', function (req, res) {

  res.send('No implementado');

});

app.get('/contactGroups/:id', function (req, res) {

  res.send('No implementado');

});

app.put('/contactGroups/:id', function (req, res) {

  res.send('No implementado');

});

app.delete('/contactGroups/:id', function (req, res) {

  res.send('No implementado');

});

app.get('/contactGroups?sort=:sortingCriteria', function (req, res) {

  res.send('No implementado');

});

app.get('/contactGroups/:id/contacts', function (req, res) {

  res.send('No implementado');

});

app.get('/contactGroups/:id/contacts/:id', function (req, res) {

  res.send('No implementado');

});