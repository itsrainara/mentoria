const impar = number => {
  if (number % 2 === 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

console.log(impar(16))

factorial = n => {
  let fact = 1
  for (let c = n; c > 1; c--) {
    // c = contador
    fact *= c
  }
  return fact
}

console.log(factorial(5))
