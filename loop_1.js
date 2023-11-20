function hasOdd(numbers) {

  result = false;
  for(i = 0;i < numbers.length;i++){
    s = numbers[i]
    o = s % 2;
    switch (o) {
      case 0:
        continue;
      default:
        result = true;
        break;
    }
    if(result == true){
      break;
    }
  }
  console.log(result);
}

hasOdd([1, 2, 3, 4, 5])
