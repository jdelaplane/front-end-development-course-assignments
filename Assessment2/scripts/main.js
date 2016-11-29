document.getElementById('submitbtn').addEventListener('click', submit);




function submit() {
        var error = [];
        var errorClass = 'invalid';
        var inputs = ['firstName', 'lastName', 'emailAddress'];


        for (var i = 0; i < inputs.length; i++) {
            var element = document.getElementById(inputs[i]);
            if (element.value === '') {
                error.push(element.placeholder + ' Is Required');
                element.classList.add(errorClass);
            } else {
                element.classList.remove(errorClass);
            }




            if (emailAddress.value.indexOf('@') < 0) {
                error.push('Valid Email Required');
                emailAddress.classList.add(errorClass);
            } else {
                emailAddress.classList.remove(errorClass);
            }


            if (howDidYouFindUs.value < 1) {
                error.push('how did you find us');
                howDidYouFindUs.classList.add(errorClass);
            } else {
                howDidYouFindUs.classList.remove(errorClass);
            }



            if (terms.checked === false) {
                error.push("You Must Accept The Terms To Submit");
                terms.classList.add(errorClass);
            } else {
                terms.classList.remove(errorClass);
            }
          }





            var html



            if (error.length > 0) {
                html = '<ul><li>' + error.join('</li><li>') + '</li></ul>';
            }

              document.getElementById('main2').innerHTML = html;

        }




        ////
