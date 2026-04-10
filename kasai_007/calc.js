let num =  Math.floor(Math.random() * 31);+ 1; // 1〜30

if(num % 3 == 0 && num % 5 ==0){
  console.log("3と5の倍数です");
}
else if(num % 3== 0){
  console.log("3の倍数です");
}
else if(num % 5 == 0){
  console.log("5の倍数です");
}
else{
  console.log(num);
}

/*
書き方	範囲
Math.floor(Math.random() * 30)	0〜29
Math.floor(Math.random() * 30) + 1	1〜30
Math.floor(Math.random() * 31)	0〜30 
*/