// problem solving part 1 
// create function to reverse a string
let word = "beautiful";
let reverseWord = ""
for (let i= word.length - 1; i >= 0; i--){
    reverseWord += word[i];
} 

console.log(reverseWord);

//capitalze the first letter of each word in a string
let phrase ="beautiful lie";
//phrase[0].toUpperCase();
//console.log(phrase[0].toUpperCase() + phrase.substring(1));
let splitItUp = phrase.split(" ");

for(let i = 0; i < splitItUp.length; i++){
    splitItUp[i] = splitItUp[i][0].toUpperCase() + splitItUp[i].substr(1);
}
console.log(splitItUp);
//compress a string of characters