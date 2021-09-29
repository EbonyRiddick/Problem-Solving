// count from numbers 1 to 100
// check to see if a number is divisible by only 1 and itself
// NOTE: cannot be divisible by any other number
// ex. 10 - only divisible by 1 and 10, not 2,3,4,5,6,7,8,9
// in order to check if 10 is prime, we also need to divide it by all numbers that came before it
// IF a number is prime, print it to the console!

function findPrimeNumber(){
    let counter = 1;
    for (let i = 1; i < 101 ; i++){
        counter++;}
        for (let n = 1; n < i; ++{
            if(i % n === 0){
                break;
            }
        }
        if(i === n){
            console.log(i);
        }
    }
}
        
    //     if(number % i ===0){
    //         return false;
    //     }
    //     else{
    //         console.log(i);
    //         return true;
    //     }
    // }
