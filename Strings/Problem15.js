// Print Prime Numbers from 1 to given limit
let count = 0;
let n = 20;
for (let j = 1; j <=n; j++) {
  for (let i = 1; i <= j; i++) {
    if (j % i == 0)
      count++

  }

  if (count == 2) {
    console.log(j);
   
  }
  count = 0;
}



