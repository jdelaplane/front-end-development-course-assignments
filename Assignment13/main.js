
var timezone = document.getElementById('timezone').value;
var errorlist = [];




if (timezone < 2) {
  errorlist.push("Select Timezone");
}


var html

if (errorlist.length < 0) {
  html = <p> what </p>
}


var html;

   if (errorList.length > 0) {
       html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
   } else {
       html = "<h1>Thank you for registering</h1>";
       reset();
   }
