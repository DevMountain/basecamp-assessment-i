// #1 create a variable called 'myName' and assign it to your name as a string

var myName = "Hayden Manning";

// #2 create a variable called 'faveNum' and assign it to your favorite number

var faveNum = 21;

// #3 create a variable called 'lovesCode' and set it to true

var lovesCode = true;

// #4 Using the previously created variables, create a new variable called 'me' that combines the myName and faveNum varible to create a sentence like this 'My name is Bryan and my favorite number is 3'

var me = "My name is " + myName + " and my favorite number is " + faveNum;

// #5 Using the previously created faveNum variable, create a new variable called 'trueFaveNum' that outputs true when comparing to a number.

var trueFaveNum = faveNum > -1;

// #6 Create a new variable called notHakeem using the previously created myName variable, test that your name DOES NOT equal 'Hakeem Olajuwon'. If your name does happen to be Hakeem Olajuwon, test against 'Karl Malone'

var notHakeem;
if (myName !== "Hakeem Olajuwon") {
  notHakeem = true;
} 
else if (myName === "Hakeem Olajuwon") {
  if(myName === "Karl Malone") {
    notHakeem = true;
  }
  else notHakeem = false;
}

// #7 Create an if statement that checks the age variable below. If age is greater than 16, then set canDrive to true otherwise set canDrive to false. The canDrive variable will be set by the unit test so do not adjust it.
var age = 18;
var canDrive;

if (age > 16) {
  canDrive = true;
} 
else {
  canDrive = false;
}

// #8 Create an if statement inside of the responseCreator function that sets the colorResponse variable value based off of a passed in value. The param value passed in will be added in the unit test. If the param value is 'green' set colorResponse variable to 'Green is okay'. If the param value is 'red' set reponse variable to 'I heart red'. Otherwise set the colorResponse variable to 'What is your favorite color?'. Make sure to return the colorResponse variable at the end once it has been properly set.

var colorResponse;

var responseCreator = function(param){
  if(param === "green") {
    colorResponse = "Green is okay";
  }
  else if(param === "red") {
    colorResponse = "I heart red";
  }
  else colorResponse = "What is your favorite color?";
  return colorResponse;
}

// #9 Create a function called 'sum' that takes in a parameter and returns the sum of that parameter.

var sum = (num) => num + num;

// #10 Create a function called greeter that takes in two parameters, name(a string) and number(a number). Have greeter return a string that says something like this 'Hi! I am Bryan and I am 28 years old" but with the appropriate values.

function greeter(name, number) {
  // return "Hi! I am ${name} and I am ${number} years old" \\\\\\ For some reason this is not working for me
  return "Hi! I am " + name + " and I am " + number + " years old"
}