const persona = [
  ['nombre', 'Juan'],
  ['edad', 39],
  ['pelo', null]
]

/* 1ª forma */

const primeraForma = Object.fromEntries(persona);
console.log(primeraForma);

/* 2ª forma */

const segundaForma = persona.reduce((total, actual) => {
  const [ propiedad, valor ] = actual;
  return { ...total, [ propiedad ]: valor };
}, {});

console.log(segundaForma);