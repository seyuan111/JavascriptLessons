//alert("Ready or not")
//console.log("This is our guess the number project")

//variables

//var - can be updated and redeclared

//let - can be updated can't be redeclared

//const - can't be updated nor redeclared

//var b = 'Smoothie'; (declaring a variable)

//console.log(b);

//var SomeNumber = 63;

//console.log(SomeNumber);

//var age = prompt("What is your age");

//document.getElementById("someText").innerHTML = age (grabs the text if in HTML)

//Numbers
//var num = 3.5 (float)

//var num = 8;

//num++ //(increase num by 1)

//num = num + 2; //(take num and add it by 2);

//console.log(3 * num); (take the var num and times it by 3)

//console.log(num % 3); (gets the remainder)

//num += 30; (increment by 30 -= to decrement)

//console.log(num)


//functions - block of code designed to perform a particular task

/*
step 1 - create a function
step 2 - call the function
*/

//Create a function
//function fun() {
//    console.log("This is a function")
//}

//fun(); //Call the function

/* Let's create a function that take in a name and
says hello followed by your name

Name: "Sean"
ex: return: "Hello Sean"

*/

//function greeting() {
//   var name = prompt("What is your name?");
//   var result = "Hello " + name;
//   console.log(result);
//}

//greeting();

//how do arguments work in functions?
//How do we add 2 numbers together in a function?

function sumNumbers(num1,num2){
    var result = num1+num2;
    console.log(result);
}

sumNumbers(5,6) //note: if you put 5 and 6 in string it will return 56


//while loops

var num = 0;

while (num < 100){ //(check if num is less than 100)
    num += 1; //(increment by 1. If you don't put this statement in while loops, it will run infinitely)
    console.log(num)
}


//for loop

for(let num = 0; num < 100; num++){
    console.log(num)
}


//data types

// let Number = 100 - number.
// let Name = "Dennis" - string.
// let Obj = {first: "Jane", last: "Elizabeth"} - object.
// let truth = true - boolean.
// let foods = ["sushi","kani","sashimi","tempura"] - array.
// let random - undefined.
// let nothing = null - null.


//strings

//let food = "Sushi";
//let moreFood = "Sushi\nSashimi"; //\n makes a new line

//console.log(moreFood)
//console.log(food.length) //display the length of the word
//console.log(food.indexOf("c")); //indexOf checks if things can be found in string if not it will return -1
//console.log(food.slice(1,3)); // slice the array and the array 1,3 (notice the 3 is not inclusive basically slices the array 1,2)
//console.log(food.replace("ushi","ashimi")) //replaces the string you want to replace to another string
//console.log(food.toUpperCase()); //make whole string uppercase
//console.log(food.toLowerCase()); //make all string lowercase
//console.log(food.charAt(3)); //prints out the character of the string
//console.log(food.split("")); //split a string into an array with the "" character


//Arrays

//2 ways to write an array

//let foods = ["Sushi","Sashimi","Tempura","Udon"]
//let foods = new Array("Sushi","Sashimi","Tempura","Udon")

//console.log(foods[1]) //how to access values at index 1.

//How to change values

//foods[3] = "Age Tofu"; 

//console.log(foods)

//How to loop through an array

//for(let i = 0; i < foods.length; i++){
//    console.log(foods[i]);
//}

//console.log("to string", foods.toString());
//console.log(foods.join(" - ")) //takes an array and joins it with the character you give it
//console.log(foods.pop(),foods) //remove the end of the array
//console.log(foods.push("Age Tofu"),foods) //adds a new item to the end
//foods[4] = "Teriyaki chicken" //another way to do push() method
//console.log(foods)
//foods.shift() //removes first element from the array
//console.log(foods)
//foods.unshift("Edaname") //adds first element from the array
//console.log(foods)

//let chinese = ["Chicken/broccoli", "General tsos chicken", "sweet n sour chicken"]

//let wholeFoods = foods.concat(chinese) //combine arrays

//console.log(wholeFoods);
//console.log(wholeFoods.reverse()); //reverse an array

//let sortedNumbers = [5,8,3,2,12,55,13,24,10];

//console.log(sortedNumbers.sort(function(a,b) { return a-b})); //sort numbers by increasing order
//console.log(sortedNumbers.sort(function(a,b) { return b-a})); //sort numbers by decreasing order

//let emptyArray = new Array();
//for (let num = 0; num < 10; num++){
//    emptyArray.push(num);
//}

//console.log(emptyArray);


//Objects - collections of properties

//let names = {
//    First: "James",
//    Age: 24,
//    Nationality: "Haitian",
//    Height: 6.2,
//    Information: function(){
//        return "Hello my name is " + this.First + " and I am " + this.Age + " years old";
//    }
//}

//console.log(names)
//console.log(names.First);
//names.First = "Henry"; // How to change value in object
//console.log(names.First)
//names.Age++
//console.log(names.Age)
//console.log(names.Information())


//If and Else and switch statement

//&& - and
//|| - or

//If and Else statement

//let age = 68

//if(age >= 65){
//    console.log("You are eligible for medicare")
//}else if(age >= 45){
//    console.log("You are eligible for United HealthCare")
//}else{
//    console.log("You are not eligible for healthcare")
//}

//switch statement

//weekday and weekend
//day 0 --> Sunday --> weekend
//day 1 --> Monday --> weekday
//day 2 --> Tuesday --> weekday
//day 3 --> Wednesday --> weekday
//day 4 --> Thursday --> weekday
//day 5 --> Friday --> weekday
//day 6 --> Saturday --> weekend

switch(3) {
    case 0:
        text = 'weekend';
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday"
}

console.log(text)