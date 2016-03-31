var Backbone = require('../lib/backbone-parse/backbone-parse');

var Contact = Backbone.Model.extend({
  _parse_class_name: 'contacts',
  validate: function (attr, options) {
    if (!validateEmail(attr.email)) {
      return "Email is invalid";
    }
  }
});

module.exports = Contact;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}