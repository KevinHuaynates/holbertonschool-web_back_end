// Archivo: 1-get_list_student_ids.js

// Definir la función getListStudentIds
function getListStudentIds(array) {
    // Verificar si el argumento es un array
    if (!Array.isArray(array)) {
        return [];
    }

    // Utilizar el método map para obtener los ids de los estudiantes
    return array.map(student => student.id);
}

// Exportar la función getListStudentIds para que pueda ser utilizada en otros archivos
export default getListStudentIds;
