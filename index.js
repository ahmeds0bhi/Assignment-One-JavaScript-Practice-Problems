/* 1- Write a program that allow to user enter number then print it Example
Input: 5
Output: 5 */

// var number = prompt("Please add number");
// console.log(number);
// document.getElementById('demo').innerHTML = number;
// window.alert(number);

/*2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
Example1
Input: 12 Output Yes 
Example 2
Input: 9 Output No */

// var number = Number(prompt("Please add number"));
// if(number%3==0 && number %4 ==0)
// {
//     console.log("yes");
// }
// else
// {
//     console.log("no");
// }

/**3- Write a program that allows the user to insert 2 integers then print the max 
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10 */

// var number1 = Number(prompt("Please add first number"));
// var number2 = Number(prompt("Please add second number"));

// if(number1 > number2)
// {
//     window.alert("The max number is " + number1);
//     // console.log(number1);

// }
// else
// {
//     window.alert("The max number is " + number2);
//     // console.log(number2);
// }

/**4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
Example 1
Input: -5
Output negative Example2
Input: 10
Output positive */

// var number = Number(prompt("Please add number"));
// if(number > 0)
// {
//     window.alert("Positive number");
// }
// else if (number < 0 )
// {
//     window.alert("Negative number");
// }
// else
// {
//     window.alert("Zero 0");
// }

/** 
//!Write a program that take 3 integers from user then print the max element and the min element.
Example 1
Input:7,8,5
Output:
max element = 8
min element = 5
Example2
Input: 3 6 9 Outputs:
Max element = 9 Min element = 3*/

// var number1 = Number(prompt("Please add first number"));
// var number2 = Number(prompt("Please add second number"));
// var number3 = Number(prompt("Please add third number"));
// //assume the max number is the first
// var max = number1;
// var min = number1;
// //to find the max numbers if it is not the first one
// if(number2 > max)
// {
//     max = number2;
// }
// if(number3 > max)
// {
//     max = number3;
// }
// //to find the min numbers if it is not the first one

// if(number2 < min)
// {
//     min = number2;
// }
// if(number3 < min )
// {
//     min = number3;
// }

// console.log("The max number is " + max);
// console.log("The min number is " + min);




// if (number1 > number2 & number3)
// {

// }

/**6- Write a program that allows the user to insert integer number then check If a number is oven or odd
7- Example 1
Input: 8
Output: even
Example 2
Input: 7
Output: odd */

// var number = Number(prompt("Please add number"));

// if (number%2 == 0)
// {
//     window.alert("This is EVEN number")
// }
// else
// {
//     window.alert("This is Odd number")
// }

/**8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
Example1
Input: O
Output: vowel
Example 2
Input: b
Output:
Consonant */

// var char = prompt("Please add character");

// if (char==="a"|char==="e"|char==="i"|char === "o"|char === "u"|char ==="A"|char ==="E"|char === "I"|char ==="O"| char === "U")
// {
//     window.alert("VOWEL Character")
// }
// else
// {
//     window.alert("Consonant Character")
// }

/**9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
Example Input 5
Output 1, 2, 3, 4, 5 */

// var number = Number(prompt("Please add number"));

// for(var i = 1; i <= number ; i++)
// {
//     console.log(i);
// }

/**10- Write a program that allows user to insert integer then print a multiplication table up to 12.
Example Input: 5 Outputs:
5 10 15 20 25 30 35 40 45 50 55 60 */

// var number = Number(prompt("Please add number"));
// for(var i = 1; i <= 12; i++)
// {
//     console.log(i* number);
// }

/**11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14 */

// var number = Number(prompt("Please add number"));

// for (var i =1 ; i <= number ; i++)
// {
//     if (i %2 == 0)
//     {
//         console.log(i);
//     }
// }

/**12- Write a program that take two integers then print the power Example:
Input: 4 3
Output: 64 
Hint how to calculate 4^3 = 4 * 4 * 4 =64
 */

// var number1 = Number(prompt("Please add number"));
// var number2 = Number(prompt("Please add the power"));
// console.log(number1 ** number2);

/**12- Write a program to enter marks of five subjects and calculate total, average and percentage.
Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
Average Marks =87
Percentage =87 */

// var number1 = Number(prompt("Please add mark of first subject"));
// var number2 = Number(prompt("Please add mark of second subject"));
// var number3 = Number(prompt("Please add mark of third subject"));
// var number4 = Number(prompt("Please add mark of fourth subject"));
// var number5 = Number(prompt("Please add mark of fifth subject"));

// var totalMarks = number1+number2+number3+number4+number5;
// var marksAvg = totalMarks / 5;
// var marksPercentage = (totalMarks/500) * 100;

// console.log("The total marks of five subjects are " + totalMarks);
// window.alert("The total marks of five subjects are " + totalMarks);

// console.log("The average marks of five subjects are " + marksAvg);
// window.alert("The average marks of five subjects are " + marksAvg);

// console.log("The percentage of marks of five subjects are " + marksPercentage);
// window.alert("The percentage of marks of five subjects are " + marksPercentage);

/**13-Write a program to input month number and print number of days in that month.
Example:
Input: - Month Number: 1
Output:-. Days in Month: 31 */

// var monthNumber = Number(prompt("Please choose a month in number"));

// switch(monthNumber)
// {
//     case 1:
//         console.log("Days in Month: 31");
//         break;
//     case 2:
//         console.log("Days in Month: 28 or 29 (during leap year)");
//         break;
//     case 3:
//         console.log("Days in Month: 31");
//         break;
//     case 4:
//         console.log("Days in Month: 30");
//         break;
//     case 5:
//         console.log("Days in Month: 31");
//         break;
//     case 6:
//         console.log("Days in Month: 30");
//         break;
//     case 7:
//         console.log("Days in Month: 31");
//         break;
//     case 8:
//         console.log("Days in Month: 31");
//         break;
//     case 9:
//         console.log("Days in Month: 30");
//         break;
//     case 10:
//         console.log("Days in Month: 31");
//         break;
//     case 11:
//         console.log("Days in Month: 30");
//         break;
//     case 12:
//         console.log("Days in Month: 31");
//         break;
//     default:
//         console.log("Invalid number, try again with valid number");
// }

/** 14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F*/

// var physicsMark = Number(prompt("Please add the physics mark"));
// var chemistryMark = Number(prompt("Please add the Chemistry mark"));
// var mathMark = Number(prompt("Please add the math mark"));
// var biologyMark = Number(prompt("Please add the biology mark"));
// var computerMark = Number(prompt("Please add the computer mark"));

// var totalMArks = physicsMark+chemistryMark+mathMark+biologyMark+computerMark;
// var percentage = (totalMArks / 500) * 100;

// console.log("The percentage is " + percentage + "%");

// if(percentage >=90)
// {
//     console.log("Grade A");
// }
// else if (percentage >=80)
// {
//     console.log("Grade B");
// }
// else if (percentage >=70)
// {
//     console.log("Grade C");
// }
// else if (percentage >=60)
// {
//     console.log("Grade D");
// }
// else if (percentage >=40)
// {
//     console.log("Grade E");
// }
// else
// {
//     console.log("Grade F");
// }

/**15- Write a program to print total number of days in month */

// var monthNumber = prompt("Please choose a month").toLowerCase();

// switch (monthNumber) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     console.log("Total number of days in this month: 31");
//     break;

//   case "february":
//     console.log(
//       "Total number of days in this month: 28 or 29 (during leap year)"
//     );
//     break;

//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     console.log("Total number of days in this month: 30");
//     break;

//   default:
//     console.log("Invalid input, try again with valid one");
// }

/**16- Write a program to check whether an alphabet is vowel or consonant */

// var char = prompt("Please add character").toLowerCase();

// switch(char)
// {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("VOWEL Character");
//         break;
//     default:
//         console.log("Consonant Character");
// }

/**17- Write a program to find maximum between two numbers */

// var number1 = Number(prompt("Please add first number"));
// var number2 = Number(prompt("Please add second number"));

// switch(true)
// {
//     case number1 > number2:
//         console.log(number1 + " is the max");
//         break;
//     case number2 > number1:
//         console.log(number2 + " is the max");
//         break;
//     default:
//         console.log(" the two numbers  are equal");
// }

/**18- Write a program to check whether a number is even or odd */

// var number = Number(prompt("Please add number"));

// switch(true)
// {
//     case number%2 == 0:
//         console.log("This is EVEN number");
//         break;
//     default:
//         console.log("This is Odd number")
// }

/**19- Write a program to check whether a number is positive or negative or zero */

// var number = Number(prompt("Please add number"));

// switch(true)
// {
//     case number > 0:
//         console.log("Positive number");
//         break;
//     case number < 0:
//         console.log("Negative number");
//         break;
//     default:
//         console.log("Zero 0")
// }

/**20- Write a program to create Simple Calculator */

// var number1 = Number(prompt("Please add first number"));
// var number2 = Number(prompt("Please add second number"));
// var operator = prompt("please write an operator like: summation, minus ,multiple ,divide").toLocaleLowerCase();

// switch(operator)
// {
//     case "summation":
//         var result = number1+number2;
//         console.log("The result is " + result);
//         break;
//     case "minus":
//         var result = number1-number2;
//         console.log("The result is " + result);
//         break;
//     case "multiple":
//         var result = number1*number2;
//         console.log("The result is " + result);
//         break;
//     case "divide":
//         var result = number1/number2;
//         console.log("The result is " + result);
//         break;
//     default:
//         console.log("Please choose a correct operator!");
        
// }