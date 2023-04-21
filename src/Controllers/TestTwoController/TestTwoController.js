function getFibonacci(num) {
  let lastNum = 0n;
  let currentNum = 1n;
  let result;

  if (num < 2) {
    return num;
  }

  for (let i = 2; i <= num; i++) {
    result = lastNum + currentNum;
    lastNum = currentNum;
    currentNum = result;
  }

  return result;
}

export function verifyIfBelongsFibonacci(num) {
  if(typeof(num) !== "string"){
    return console.log('Por favor, utilize ("") entorno do número para o melhor funcionamento da função.')
  }

  if(isNaN(num)){
    return console.log("Você não digitou um numero válido. Tente novamente.")
  }
  
  let belongs = false;
  let number = BigInt(num);

  let i = 0;

  while (!belongs && getFibonacci(i) <= number) {
    if (getFibonacci(i) === number) {
      belongs = true;
      break;
    }

    i++;
  }

  if (belongs) {
    console.log(`${number} pertence à sequência de Fibonacci`);
  } else {
    console.log(`${number} não pertence à sequência de Fibonacci`);
  }
}
