//Problem 3 : Given an array of numbers find the average of all the even numbers.

let number=[1,2,3,4,5,6,7,8]
 let sum=0;
let count=0;
for (let i=0;i<number.length;i++)
  {
    if ((number[i]%2)===0)
    {
      sum=sum+number[i];
      count ++;
    }
    
  }
console.log(sum/count);










