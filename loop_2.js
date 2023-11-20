function hasOdd(numbers) {

  result = [];
  for(let num of numbers){
    check = num % 2;
    switch (check) {
      case 0:
        break;
      default:
        result.push(num);
        break;
    }
  }
  console.log(result);
}

hasOdd([1, 2, 3, 4, 5])

/*

function hasOdd(numbers) {

  result = [];
  for(i = 0;i < numbers.length;i++){
    s = numbers[i]
    o = s % 2;
    switch (o) {
      case 0:
        break;
      default:
        result.push(s);
        break;
    }
  }
  console.log(result);
}

hasOdd([1, 2, 3, 4, 5])

*/
