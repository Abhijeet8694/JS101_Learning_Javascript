// Problem 2 : Given an array of string count the overall total number of characters

arr=["abhijeet","aditya","harsh"];

let count=0;
for(let i=0;i<arr.length;i++)
  {
   count=count+arr[i].length;
  }
 console.log(count);