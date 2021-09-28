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
//phrase[0].toUpperCase();
//console.log(phrase[0].toUpperCase() + phrase.substring(1));
let splitItUp = myphrase.split(" ");

for(let i = 0; i < splitItUp.length; i++){
    splitItUp[i] = splitItUp[i][0].toUpperCase() + splitItUp[i].substr(1);
}
console.log(splitItUp.join(" "));

//compress a string of characters
    //console.log(splitItUp.compress(" "));

// print numbers 1 to 100
let counter = 1



for(let i = 0; i < 101; i++){
    //I want to dive i by itself 
    if(counter % 1 === 0 && counter % i === 0){
        console.log(i);
    }
    // if(i /= i){
    //     console.log(i);
    // }   
    // if(i % i);{
    //     console.log(i);
    // }
    // if(i %= i);{
    //     console.log(i);
    // }
    
    

}