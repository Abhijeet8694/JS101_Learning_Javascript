//how many even no and odd no.

let arr=[1,2,3,4,5,6,7,8,9,10,11]
let even_count=0;
let odd_count=0;

for(let i=0;i<arr.length;i++)
  {
    if (arr[i]%2==0)
    {
      even_count++;
    }
    else
    {
      odd_count++;
    }   
  }
 console.log("Even:",+even_count,"Odd:",odd_count);



