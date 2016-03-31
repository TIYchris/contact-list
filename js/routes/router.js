var Backbone = require('../lib/backbone-parse/backbone-parse');
var indexTemplate = require('../../templates/index.html');
var cardTemplate = require('../../templates/card.html');
var newContactTemplate = require('../../templates/newContact.html');
var Contacts = require('../collections/contacts');
var Contact = require('../models/contact');

require('font-awesome/css/font-awesome.min.css');

var $ = require('jquery');

var $contact = $("#contactButtons");


var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start();
  },
  routes: {
    '': 'index',
    'contact/:contactId': 'contact',
    "newContact": "newContact"
  },
  index: function () {
    Contacts.fetch({
      success: function (collection){
        var data = {contactsData:collection.toJSON()}
        $("#container").html(indexTemplate(data));
      }
    });
  }
});

var router = new Router();

router.on('route:contact', function (contactId){
  var contact = new Contact({
    objectId: contactId
  });

  contact.fetch({
    success:function(contact){
      $("#container").html(cardTemplate(contact));
    }
  })
})

router.on('route:newContact', function(){
  $("#container").html(newContactTemplate());
})

$('#container').on('submit', '#newContact', function(e) {
    e.preventDefault();

    console.log('submitted');

    var contact = new Contact();

    contact.set({
        'fname': $("#fname").val(),
        'lname': $("#lname").val(),
        'email': $("#email").val(),
        'phone': $("#phone").val(),
        'city': $("#city").val(),
        'state': $("#state").val(),
        'image': $("#image").val(),
    });


    contact.save({}, {
      success: function(){
        console.log('testing');
        router.navigate('/', {trigger:true})
      }
    });

    $(".newContact").html("Saving...");
});


// Contacts.fetch({
//   success: function (collection) {
//     var data = {contactsData:collection.toJSON()}
//     $("#container").html(ContactsTemplate(data));
//   }
// })

module.exports = router;