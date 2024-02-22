// Archivo: 0-get_list_students.js

// Definir la función getListStudents
function getListStudents() {
  // Crear y retornar un array de objetos representando a los estudiantes
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

// Exportar la función getListStudents para que pueda ser utilizada en otros archivos
export default getListStudents;
