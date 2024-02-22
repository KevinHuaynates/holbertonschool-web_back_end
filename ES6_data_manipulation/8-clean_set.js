function cleanSet(set, startString) {
  let result = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      result += item.substring(startString.length) + '-';
    }
  }
  // Eliminamos el último guión adicional
  result = result.slice(0, -1);
  return result;
}

export default cleanSet;
