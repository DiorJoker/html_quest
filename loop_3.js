function square(numbers) {

  for(var item in numbers){
    numbers[item] = numbers[item] * numbers[item]
  }

  console.log(numbers);
}

square([1, 2, 3, 4, 5])
