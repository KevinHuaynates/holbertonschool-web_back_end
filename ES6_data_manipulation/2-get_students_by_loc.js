// Archivo: 2-get_students_by_loc.js

// Definir la función getStudentsByLocation
function getStudentsByLocation(students, city) {
  // Utilizar el método filter para obtener los estudiantes ubicados en la ciudad especificada
  return students.filter((student) => student.location === city);
}

// Exportar la función getStudentsByLocation para que pueda ser utilizada en otros archivos
export default getStudentsByLocation;
