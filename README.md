## Challenge-Becode

Your mission if you accept it is to do the 5 katas to prove your worth to our dear master of evil (of the code).
you have until the end of the week to complete your PR ("Sweater Request").
follow the instructions and put your code files in the lib folder.

#### Mission Order :

* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

tests suite:

```js
Test.describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  Test.it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  Test.it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
});
```
* Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

```
1st (1)   2nd (3)    3rd (6)
*         **               ***
          *                **
                            *
 ```
You need to return the nth triangular number. You should return 0 for out of range values:
```js
 triangular(0)==0,
  triangular(2)==3,
  triangular(3)==6,
  triangular(-10)==0
```
the test suite :

```js
Test.assertEquals( triangular(2), 3 )
Test.assertEquals( triangular(4), 10 )
```
* Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
Good Luck!

Tests suite

```js
Test.describe("Random test cases", function() {
Test.assertEquals(calculateAge(2012, 2016),"You are 4 years old.");
Test.assertEquals(calculateAge(1989, 2016),"You are 27 years old.");
Test.assertEquals(calculateAge(2000, 2090),"You are 90 years old.");
Test.assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
Test.assertEquals(calculateAge(3400, 3400),"You were born this very year!");
Test.assertEquals(calculateAge(900, 2900),"You are 2000 years old.");
Test.assertEquals(calculateAge(2010, 1990),"You will be born in 20 years.");
Test.assertEquals(calculateAge(2010, 1500),"You will be born in 510 years.");
Test.assertEquals(calculateAge(2011, 2012),"You are 1 year old.");
Test.assertEquals(calculateAge(2000, 1999),"You will be born in 1 year.");
})
```

---



* You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument will be numbers.
The third argument will represent a sign indicating the operation to perform on these two numbers.

Example:

```js
calculator(1,2,"+"); //=> result will be 3
```
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:

```js
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
```
Good luck!

tests suite :

```js
Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate");
Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");  
```
---

* It's too hot, and they can't even…
One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.

Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.

The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

Task
Given an integral number of watermelons `w (1 ≤ w ≤ 100; 1 ≤ w` in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

Examples

```js
divide(2) === false // 2 = 1 + 1
divide(3) === false // 3 = 1 + 2
divide(4) === true  // 4 = 2 + 2
divide(5) === false // 5 = 2 + 3
divide(6) === true  // 6 = 2 + 4
```
tests suite:


```js
Test.assertEquals(divide(4), true);
Test.assertEquals(divide(2), false);
Test.assertEquals(divide(5), false);
Test.assertEquals(divide(88), true);
Test.assertEquals(divide(100), true);
Test.assertEquals(divide(67), false);
Test.assertEquals(divide(90), true);
Test.assertEquals(divide(10), true);
Test.assertEquals(divide(99), false);
Test.assertEquals(divide(32), true);
```
