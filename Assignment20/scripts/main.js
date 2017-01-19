$(document).ready(function () {


});

$('#YourName').on('blur', validateName);
$('#YourAnswer').on('blur', validateAnswer);




//$('#btnReset').on('click', resetForm);
//$('#btnSubmit').on('click', submitForm);


function validateName () {

  var nameElm = $('#YourName');

  var error = nameElm.closest('input-group').find('.requiredMsg');

  if(nameElm.val() === '') {

    error.fadeIn();
            nameElm.addClass('invalid');
            return false;
        }else{
            error.fadeOut();
            nameElm.removeClass('invalid');
            return true;
  }


};

 function validateAnswer() {

  var answerElm = $('#YourAnswer')

  var error = answerElm.closest('input-group').find('.requiredMsg');

  if (answerElm.val() === '') {

    error.fadeIn();
      answerElm.addClass('invalid');
      return false;
    } else {
      error.fadeOut();
        answerElm.removeClass('invalid');
        return true;
    }

  }


//$('#btnReset').on('click', function(){

//var input =$('#btnReset').closet('input-group').find('.requiredMsg');
//var input2 =$('#btnReset').closet('input-group').find('.requiredMsg');



//});




function submitForm() {

if validateName




}
