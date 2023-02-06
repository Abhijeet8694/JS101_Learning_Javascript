// find Unit consumed for bill.
let bill=155;
let total_bill = bill-80;
let unit;
let rate1=3;

let rate2=5;
let rate3=10
if(total_bill<=150)
{
  unit=(total_bill)/rate1;
  console.log(unit);
}
else if(total_bill>=150 && total_bill<=650)
{
  unit = 50 + ((total_bill- 150)/rate2);
  console.log(unit);
}
else
{
  unit = 50 + 100 + (total_bill-650)/rate3;
  console.log(unit);
}
11






