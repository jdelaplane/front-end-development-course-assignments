
var btn = document.getElementById('btnSubmit');
btn.addEventListener('click', update);


var errClass = "invalid";


function update() {
  var errormessages = [];

var firstName = document.getElementById('firstName');

if (fistName.value === '') {
  errormessages.push('First Name is required');


}

var lastName = document.getElementById('lastName');

if (lastName.value === '') {
  errormessages.push('Last Name is required');


}

var emailAddress = document.getElementById('emailAddress');

if (emailAddress.value === '') {
  errormessages.push('Email Adress is required');


  }

  var password = document.getElementById('password');

  if (password.value === '') {
     errormessages.push('password is required');

  }

  var confirmPassword = document.getElementById('confirmPassword');
  if (confirmPassword.value === '') {
      errormessages.push('Confirm password is required');

  }



if (errormessages.length > 0) {
  var html = ''
  for (var i = 0; i < errormessages.length; i++) {
    html = html + errormessages[i] + '<br />';
  }
      document.getElementById('messages').innerHTML= html;

  }else {

    document.getElementById('messages').innerHTML = "Thank you for submitting your information";

  }
}



/*var btn2 = document.getElementById('btnReset');
btn2.addEventListener('click', reset);













/*

var messages = [];

var fistName = document.getElementById('fistName').value;

function submit() {

if (fistName === 'john') {
  console.log('hola');
}


}

*/






//var button = document.getElementById("btnSubmit");
//button.addEventListener('click', function(){ alert("Button is clicked"); });
