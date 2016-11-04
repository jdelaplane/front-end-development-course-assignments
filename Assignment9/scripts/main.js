////////////part 1

var name = "John Delaplane";

document.getElementById("partOne").innerHTML = name;

///////////part 2

var foo = "this is not an integer"

document.getElementById("partTwo").innerHTML = foo;

/////////// part 3

var partThree = 5;

var y = partThree + 10;

var z = (partThree * 14) - partThree;


document.getElementById("partThree").innerHTML = z;

console.log(z)

///////////// part 5

var myHtml = " ";
var h2 = "<h2>Title!</h2>";
var p = "<p>Lorem ipsum dolor</p>";
var h3 = "<h3>Pellentesque habitant morbi</h3>";
var p2 = "<p>Morbi in sem quis dui placerat ornare. </p>";
var string = myHtml + h2 + p + h3 + p2;

document.getElementById("partFive").innerHTML = string;

///////////// part 4

var fname = "John";
var lname = "Delaplane" ;
var fullName = fname + " " + lname;
document.getElementById("partFour").innerHTML = fullName;

///////////// part 6

var part6Result =getRandomNumber();


if (part6Result > 50) alert("over 50");

else {

alert("below 50");


}














var part6Number =getRandomNumber();

/**
 *      Part 7
 */
var part7Number = getRandomNumber();




////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
