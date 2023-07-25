const numbersInt = [23, 56, 78, 89, 13, 675, 890, 3, 6, 43];

let container = 0;

for (let i = 0; i < numbersInt.length; i++) {
  let numberInt = numbersInt[i];

  console.log(numberInt);

  if (i % 2 != 0) {
    container = container + numbersInt[i];

    console.log(container);
  }
}
console.log(container);
