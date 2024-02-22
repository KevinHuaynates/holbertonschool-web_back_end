// Archivo: 4-update_grade_by_city.js

// Definir la función updateStudentGradeByCity
function updateStudentGradeByCity(students, city, newGrades) {
  // Filtrar estudiantes por ciudad
  const filteredStudents = students.filter((student) => student.location === city);

  // Mapear sobre los estudiantes filtrados y actualizar sus calificaciones
  const updatedStudents = filteredStudents.map((student) => {
    // Buscar la calificación correspondiente en newGrades
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
    // Si se encuentra la calificación, asignarla al estudiante, de lo contrario, asignar "N/A"
    return {
      ...student,
      grade: foundGrade ? foundGrade.grade : 'N/A';
    };
  });

  return updatedStudents;
}

// Exportar la función updateStudentGradeByCity para que pueda ser utilizada en otros archivos
export default updateStudentGradeByCity;
