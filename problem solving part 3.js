// create an array of numbers
//determine what you want your target total to be
//add the numbers in the array until two numbers equal your target total
//NOTE: can only use each number one time

let numbers = [2, 14, 52, 9];
let targetSum = "66";
function addToGetTarget(anArray){
    for( let i = 0; i< targetSum; i++){
    if(anArray[i] + anArray[i] !== targetSum){
       return false;
    }
    else{
        console.log(anArray[i] + anArray[i]);
    }
    // for(let i = 0; i= targetSum; i++){
    //     if(() !== targetSum){
    //         counter=0;
    //         return false;
    //     }
    //     else{
    //         console.log()
    //     }
    // }
}
addToGetTarget(numbers)