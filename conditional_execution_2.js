function checkOddOrEven(s) {

  o = s % 2;
  switch (o) {
    case 0:
        console.log("Even");
        break;
    default:
      console.log("Odd");
      break;
  }

}

checkOddOrEven(2)
