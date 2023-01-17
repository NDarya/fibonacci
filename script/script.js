let anyNumber = prompt('Type any number:')

let num1 = 1 
let num2 = 1

for( let i = 3; i <= anyNumber; i++){
    let num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3);
}


