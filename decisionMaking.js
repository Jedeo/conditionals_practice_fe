// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log(;"You stay with the bear and become it's best friend!");
}




// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.

/*line 12 we have if statment with condition that is checking if doorChoice is strictly equal1.
line 13 if the condition is true than the bearClothing Will have a string voule of "hot.
line 14 15 if condition is false it will execute the else statment which will the variable bearClothing to "scarf"
line 16 shows as a closing tag showing us that its the end of the if statment */

// 2. What variable has a new value assigned to it after the first if statement executes?
//bearClothing has new voule assigned to it.
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// bearClothing would be "scarf"
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// line 25 we see that we have an "if" statment with a conditon that is check if the variable bearChoice is strictly equals to "1".
// line 26 will log only if the if condition boolan is true
/* line 27-28 if the previes the conditonis false, than the if statement will job to the next code block and check if the conditons are true. with that said,
we can see that line 27 is checking if the conditon boolan is true if its true them the statment will run*/
//line 31 if all conditons are false, than the else statment will execute ang only if all other conditions are false.

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// the final out come would be "You run as fast as you can into the next room. It's full of snakes!"
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
/* the final out come would be "You see a bear putting on a hat.
It looks like that hat is too small for the bear, do you... "
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!*/

// 7. What is your favorite ending?
//staying with the bear and becoming best friends
