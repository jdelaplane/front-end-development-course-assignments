function update () {

  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastName').value;
  var emailAddress = document.getElementById('emailAddress').value;
  var html = '<ul>';

  var messages =[];


  if (firstName === '') {
  messages.push('First name is required');
  }


  if ( lastName === '' ) {
      messages.push('Last name is required');
  }

  if ( emailAddress === '' ) {
      messages.push('Email is required');
  }

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
