export function reverseStr(str){

  if(typeof str === "number"){
    return console.log('Você não digitou uma string. Utilize ("") entorno do que deseja inverter.')
  }

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  console.log(reversedStr.trim());
}


