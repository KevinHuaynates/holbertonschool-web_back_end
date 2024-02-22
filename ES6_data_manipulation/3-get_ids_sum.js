// Archivo: 3-get_ids_sum.js

// Definir la función getStudentIdsSum
function getStudentIdsSum(students) {
  // Utilizar el método reduce para obtener la suma de todos los ids de los estudiantes
  return students.reduce((acc, student) => acc + student.id, 0);
}

// Exportar la función getStudentIdsSum para que pueda ser utilizada en otros archivos
export default getStudentIdsSum;
