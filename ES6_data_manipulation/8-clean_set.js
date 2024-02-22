function cleanSet(set, startString = '') {
  // Comprobación de si startString no es una cadena
  if (typeof startString !== 'string') {
    return '';
  }

  let result = '';
  for (const item of set) {
    // Comprobamos si el elemento es una cadena y si comienza con startString
    if (typeof item === 'string' && item.startsWith(startString)) {
      result += item.substring(startString.length) + '-';
    }
  }
  // Eliminamos el último guión adicional si hay elementos coincidentes
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}

export default cleanSet;
