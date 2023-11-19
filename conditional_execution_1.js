
//温度チェッカー

//関数定義
function checkTemperature(t) {

  if (t >= 30) {
    result = "Hot"
  }

  else if(t < 30 && t >= 15){
    result = "Warm"
  }

  else if(t < 15){
    result = "Cold"
  }

  console.log(result);
}

//関数呼び出し
checkTemperature(30)
