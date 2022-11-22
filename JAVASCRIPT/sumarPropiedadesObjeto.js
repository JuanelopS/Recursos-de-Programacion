const edades = {
  Juan: 39,
  Sheila: 33,
  Glados: 7,
  Ahsoka: 1
}

const valores = Object.values(edades);
// console.log(valores);

const suma = valores.reduce((total, valor) => total + valor, 0);
console.log(suma);