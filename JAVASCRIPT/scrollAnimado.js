/* 
*  Asígnale a lo que debes pulsar esta función, pasándole como parámetro
*  el sitio a donde debe ir (Ej: #banner o header); 
*/

const scrollAnimado = elemento => {
  const destino = document.querySelector(elemento);
  destino.scrollIntoView({
    behavior: 'smooth'
  });
}

// scrollAnimado("#banner");