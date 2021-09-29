// problem solving part 1 
// create function to reverse a string
let word = "beautiful";
let reverseWord = ""
for (let i= word.length - 1; i >= 0; i--){
    reverseWord += word[i];
} 

console.log(reverseWord);

//capitalze the first letter of each word in a string
let myphrase ="beautiful lie is a great song";
//myPhrase[0].toUpperCase();
//console.log(myPhrase[0].toUpperCase() + myPhrase.substring(1));
let splitItUp = myphrase.split(" ");

for(let i = 0; i < splitItUp.length; i++){
    splitItUp[i] = splitItUp[i][0].toUpperCase() + splitItUp[i].substr(1);
}
console.log(splitItUp.join(" "));
  //console.log(splitItUp.compress(" "));



// determine string of characters: should have characters with multiples
// count like characters in the string
// group the like characters
// repeat count for full length of the string
// print the new string

let myCharacters = 'aaabbbbbccccaacccbbbaaabbbaaa'
let counter = 0
let result = '';

function compressMyString(characters){
for (let i = 0; i < characters.length; i++){
     counter++;
        if(characters[i] !== characters[i+1]){
         result = result + characters[i] + counter;
            counter = 0;
        }
    }
    console.log(result);
}
compressMyString(myCharacters);