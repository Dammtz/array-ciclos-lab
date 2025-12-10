// Sugerencia filter() e includes () 
// Crear un programa que recorra ambos areglos y si hay cursos en comun imprimir en consola.

let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function compareCourses (student1Courses, student2Courses) {
    let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
    return commonCourses;
}; 

let resultado = compareCourses (student1Courses, student2Courses);
console.log ("El curso que comparten en común es: " + resultado);