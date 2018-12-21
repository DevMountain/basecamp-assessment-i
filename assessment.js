// #1 create a variable called 'myName' and assign it to your name as a string

var myName = "Devan";

// #2 create a variable called 'faveNum' and assign it to your favorite number

var faveNum = 27;

// #3 create a variable called 'lovesCode' and set it to true

var lovesCode = true;

// #4 Using the previously created variables, create a new variable called 'me' that uses the myName and faveNum varible to create a sentence like this 'My name is Bryan and my favorite number is 3'

var me = My name is myName and my favorite number is faveNum;

// #5 Using the previously created faveNum variable, create a new variable called 'trueFaveNum'. *trueFaveNum* should equal true when comparing faveNum to your favorite number.v // HINT: Use a comparison operator

var trueFaveNum == faveNum;

// #6 Create a new variable called notHakeem. Using the previously created myName variable, test that your name DOES NOT equal the string 'Hakeem Olajuwon'. If your name does happen to be Hakeem Olajuwon, test against 'Karl Malone'

var notHakeem = myName != "Hakeem Olajuwon";

// #7 Create an if statement that checks the age variable below. If age is greater than 16, then set canDrive to true otherwise set canDrive to false. The canDrive variable will be set by the unit test so do not adjust it.
var age = 18;
var canDrive;

if (age>16){
console.log(canDrive);
} else {
  console.log(false);
};


// #8 Create an if statement inside of the responseCreator function that sets the colorResponse variable value based off of a passed in value. The param value passed in will be added in the unit test. If the param value is 'green' set colorResponse variable to 'Green is okay'. If the param value is 'red' set reponse variable to 'I heart red'. Otherwise set the colorResponse variable to 'What is your favorite color?'. Make sure to return the colorResponse variable at the end once it has been properly set.

var colorResponse;

var responseCreator = function(param){
  if (colorResponse=="green"){
  console.log("Green is okay");
  } else if (colorResponse=="red"){
    console.log("I heart red");
  } else { 
    console.log("what is your favorite color?");
  }
  }
};


// #9 Create a function called 'sum' that takes in one parameter and returns the sum of that parameter added it itself.

var n = 7;
function sum(){
return n + n;
};

// #10 Create a function called 'greeter' that takes in two parameters, name and number. Have 'greeter' return a string that says something like this 'Hi! I am Bryan and I am 28 years old" but with the appropriate values..

funtion greeter(name, number){
  return name + number;
};
console.log("Hi! I am Devan", "and I am 27 years old")