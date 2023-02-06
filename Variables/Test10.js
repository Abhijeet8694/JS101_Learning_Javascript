//calculate Total Bill

let unit=25;
let total;
if(unit<=50)
{
 total=80+(unit*3);
 console.log(total);
}
else if(unit>=51 && unit<=150)
{
  total=80+(50*3)+(unit-50)*5;
  console.log(total);
}
else
{
  total = 80+(50*3)+(100*5)+(unit-150)*10
  console.log(total);
}

  







