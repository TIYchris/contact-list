var $ = require('jquery');
var Contacts = require('./collections/contacts');
var Contact = require('./models/contact');

var $form = $("#contactForm");



$form.on('submit', function (e) {
  e.preventDefault();

  var contact = new Contact({
    objectId: 'asfasfsad'
  });

  contact.set({
    'first_name': $("#fname").val(),
    'last_name': $("#lname").val(),
    'email': $("#email").val(),
    'phone': $("#phone").val(),
    'city': $("#city").val(),
    'state': $("#state").val()
  });

  

  $("#showContact").html(contact.get('email'));
  
  console.log(contact);
  contact.on('invalid', function(model, error) {
    console.log(model.get('email') + " " + error);
  });

  contact.save();


});



// var contact = new Contact({
//   objectId: 'qI5k9irpHN'
// });

// contact.set('first_name', 'John');
// contact.save();

// var contact = new Contact();
// contact.set({
//   'first_name': 'Mark',
//   'last_name': 'Medeiros',
//   'phone': '702-555-1111',
//   'city': 'Las Vegas',
//   'state': 'NV'
// });
// contact.save();




// Contacts.fetch({
//   success: function (contacts) {
    
//   }
// })