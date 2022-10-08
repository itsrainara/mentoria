// Date js = cria uma instancia que representa um momento no tempo

//formatar data para padrao brasileiro
// let data = new Date()
formatDate = data => {
  let newDate = new Date(data)
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`
}
// console.log(formatDate(data))

//calcular a diferença de dias entre datas
// let currentDay = new Date()
// let pastDate = new Date(2021, 10, 05)
// //abs = retorna o valor absoluto de um numero (O valor absoluto de x. Se x for negativo (incluindo -0), retorna -x. Caso contrário, retorna x.)
// let dataMilissegundos = Math.abs(currentDay.getTime() - pastDate.getTime())
// //a funçao ceil vai arrendondar o valor para um numero exato.
// let diasDeDiferença = Math.ceil(dataMilissegundos / (1000 * 60 * 60 * 24)) //milissegundos, segundos, minutos, horas.
// console.log(diasDeDiferença)

//somar dias a uma determinada data

// let day = new Date()
// let amount = 10
// day.setDate(day.getDate() + amount)
// console.log(formatDate(day))

//Pegar primeiro e ultimo dia do mes

// let data = new Date()
// let firstDay = new Date(data.getFullYear(), data.getMonth(), 1)
// let lastDay = new Date(data.getFullYear(), data.getMonth() + 1, 0)
// console.log(formatDate(firstDay), formatDate(lastDay))
