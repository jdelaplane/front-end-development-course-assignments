<<<<<<< HEAD
var messages = [];
  var firstName = document.getElementById('firstName').value;
=======
function update () {

  var firstName = document.getElementById('firstname').value;
>>>>>>> origin/master
  var lastName = document.getElementById('lastName').value;
  var emailAddress = document.getElementById('emailAddress').value;
  var html = '<ul>';

<<<<<<< HEAD

  if ( firstName === '' ) {
      messages.push('First name is required');
  }

=======
  var messages =[];


  if (firstName === '') {
  messages.push('First name is required');
  }


>>>>>>> origin/master
  if ( lastName === '' ) {
      messages.push('Last name is required');
  }

  if ( emailAddress === '' ) {
      messages.push('Email is required');
  }

<<<<<<< HEAD
  var user {

    firstName: "firstname"
    lastName: "lastname"
    emailAddress: "email address"

    fullname: function () { firstName + '' lastName

    }

  }














//////////////
=======
  for (i = 0, i <messages.length; i++) {
    html = html + '<li>' + messages[i] + '</li>'
  }


}


var user = {
        firstname: firstName,
        lastname: lastName,
        email: emailAddress,
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        }
    }
>>>>>>> origin/master
