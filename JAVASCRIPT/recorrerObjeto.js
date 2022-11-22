const coche = {
  brand: 'Tesla',
  model: 'X',
  year: 2019,
  price: 120000,
  seats: 6
}


Object.entries(coche).forEach(([property, value]) => console.log(`${property}: ${value}`));
