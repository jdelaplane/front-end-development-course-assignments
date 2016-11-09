function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = firstName + " " + lastName;

    console.log(firstName);
    console.log(lastName);

    document.getElementById('p1_fullName').innerHTML = fullName;



    document.getElementById('p1_fullNameLength').innerHTML = firstName.length + lastName.length;






    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    document.getElementById('p2_email').innerHTML = emailAddress;

    if ( emailAddress.indexOf('@') > -1) {
        getElm('p2_valid').innerHTML = true;
    } else {
        getElm('p2_valid').innerHTML = false;
    }

    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;


    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    document.getElementById('p3_number').innerHTML = randomNumber;

    if (randomNumber => 0) {

      document.getElementById('p3_valid').innerHTML = true;

} else {

    document.getElementById('p3_valid').innerHTML = false;
}






    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

    document.getElementById('p4_arraylength').innerHTML = arrayInput.length;
















    ////////////////////////Youre code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
