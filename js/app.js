var $ = require('jquery');
var Contacts = require('./collections/contacts');
var Contact = require('./models/contact');
var ContactsTemplate = require('../templates/index.html');



$(document).ready(function(){

  var Router = require('./routes/router');

  $('body').on('click', 'a', function (e){
    e.preventDefault();
    var href = $(this).attr('href').substr(1);
    Router.navigate(href, {trigger:true});
  });
});