function oddishOrEvenish(number) {
  const strNumber = number.toString();
  let sum = 0;
  for (let i = 0; i < strNumber.length; i++) {
    const digit = parseInt(strNumber[i]);
    sum += digit;
  }
  if (sum % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
