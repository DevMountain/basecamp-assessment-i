// #1 create a variable called 'myName' and assign it to your name as a string

// CODE HERE
var myName = "Baylee";
console.log(myName);

// #2 create a variable called 'faveNum' and assign it to your favorite number

// CODE HERE
var faveNum = "13";
console.log(faveNum);

// #3 create a variable called 'lovesCode' and set it to true

// CODE HERE
var lovesCode = true;
console.log(lovesCode);

// #4 Using the previously created variables, create a new variable called 'me' that uses the myName and faveNum varible to create a sentence like this 'My name is Bryan and my favorite number is 3'

// CODE HERE
var me = (myName + faveNum);
console.log("My name is " + myName + " and my favorite number is "+faveNum);


// #5 Using the previously created faveNum variable, create a new variable called 'trueFaveNum'. *trueFaveNum* should equal true when comparing faveNum to your favorite number.v // HINT: Use a comparison operator

// CODE HERE
var trueFaveNum = 13;
if (trueFaveNum==faveNum){
  console.log(trueFaveNum=true)
} else {
  console.log(trueFaveNum=false)
};

// #6 Create a new variable called notHakeem. Using the previously created myName variable, test that your name DOES NOT equal the string 'Hakeem Olajuwon'. If your name does happen to be Hakeem Olajuwon, test against 'Karl Malone'

// CODE HERE
var notHakeem;
var hisName = "Hakeem Olajuwon";

if (myName!=hisName){
  if(hisName!="Karl Malone"){
    console.log(notHakeem=true);
  };
};


// #7 Create an if statement that checks the age variable below. If age is greater than 16, then set canDrive to true otherwise set canDrive to false. The canDrive variable will be set by the unit test so do not adjust it.
var age = 18;
var canDrive;


// CODE HERE
var canDrive = age>16;
  if(age>16) {
    console.log(true);
  } else if (age<=16){
    console.log(false);
  };


// #8 Create an if statement inside of the responseCreator function that sets the colorResponse variable value based off of a passed in value. The param value passed in will be added in the unit test. If the param value is 'green' set colorResponse variable to 'Green is okay'. If the param value is 'red' set reponse variable to 'I heart red'. Otherwise set the colorResponse variable to 'What is your favorite color?'. Make sure to return the colorResponse variable at the end once it has been properly set.

var colorResponse;

var responseCreator = function(param){
  // CODE HERE

if (param=="Green"){

  return colorResponse = "Green is okay,"
} else if (param=="Red"){
  return colorResponse = "I heart red."
} else {
  return colorResponse = "What is your favorite color";
};
};
console.log(responseCreator("Green"));

// #9 Create a function called 'sum' that takes in one parameter and returns the sum of that parameter added it itself.

// CODE HERE

function sum(num1){
  return num1+num1
};
  console.log(sum(3));

// #10 Create a function called 'greeter' that takes in two parameters, name and number. Have 'greeter' return a string that says something like this 'Hi! I am Bryan and I am 28 years old" but with the appropriate values..

// CODE HERE
var age = 23;
function greeter (myName, age){
};
console.log("Hi! I am " + myName + " and I am " + age + " years old")
