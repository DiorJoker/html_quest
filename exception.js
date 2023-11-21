function checkDivisibleByFive(num) {
  let target = num % 5;
  var result;
  if(target == 0 ){
    result = true;
  }
  else{
    result = false;
  }
  return result
}


// 処理を記述、try...catch 構文を使用し、その中で checkDivisibleByFive 関数を呼び出す
try{
  const result = checkDivisibleByFive(4);
  if(result === false){
    throw new Error('5で割り切れない数字です');
  }
  else{
    console.log(result)
  }

}catch(e){
  console.error( e.message );
}
