// var vel = 60;

var radar = velocity => {
  if (velocity > 80) { //simple condition 
    console.log(`Voçê ultrapassou o limite de velocidade com ${velocity}km/h. MULTADO!`)
  } else velocity <= 80
  {
    console.log(`Dirija sempre com cuidado!`)
  }
}

console.log(radar(90))
