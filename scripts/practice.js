let myArray = [1,2,3];
let theSameArray = new Array(1, 2, 3);
console.log(theSameArray);
myArray[1]=20;
console.log(myArray[1]);

myArray=["string",10,false];
console.log(myArray);

//exercise 1

let otherArray = ["What is the meaning of life?",42,true];
console.log(otherArray);
//end of exercise 1


const numbers = [10,20,30,40,50];
console.table(numbers);

const months=["Jan", "Feb", "Mar", "Apr", "May"];
console.table(months);

//displaying all the values in the array, in the console
for(let i=0; i<months.length; i++){
    console.log(months[i]);
}

//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(number.length);

//adding numbers to end of array
numbers.push(60,70,80);
//adding numbers to beginning of array
numbers.unshift(-10,-20,-30);
console.table(numbers);

months.pop(); //deleting value at end of array
months.shift(); //deleting value at beginning of array
months.splice(1,1); //deleting certain number of values in Array (index,#)

console.table(months);