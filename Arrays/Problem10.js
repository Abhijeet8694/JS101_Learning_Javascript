let array=[1,2,3,4,5]

let sum=0;
let count=0;

for (let i=0;i<array.length;i++)
  {
    if (array[i]%2==0)
    {
      sum=sum+array[i];
      count++;
    }
  }
console.log(sum/count);










