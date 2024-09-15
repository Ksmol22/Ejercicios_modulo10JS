// Lista de estudiantes (reutilizando la del segundo ejercicio)
let estudiantes = [
    {nombre: "Ana", nota: 85},
    {nombre: "Carlos", nota: 58},
    {nombre: "María", nota: 92},
    {nombre: "Juan", nota: 75},
    {nombre: "Laura", nota: 63},
    {nombre: "Pedro", nota: 45},
    {nombre: "Sofía", nota: 88},
    {nombre: "Diego", nota: 71},
    {nombre: "Valentina", nota: 59},
    {nombre: "Gabriel", nota: 82},
    {nombre: "Lucía", nota: 67},
    {nombre: "Andrés", nota: 55},
    {nombre: "Isabella", nota: 79},
    {nombre: "Mateo", nota: 61},
    {nombre: "Camila", nota: 93},
    {nombre: "Daniel", nota: 70},
    {nombre: "Paula", nota: 86},
    {nombre: "Alejandro", nota: 52},
    {nombre: "Valeria", nota: 77},
    {nombre: "Santiago", nota: 64}
  ];
  
  // Verificar si todos los estudiantes aprobaron (nota mayor a 60)
  let todosAprobaron = estudiantes.every(function(estudiante) {
    return estudiante.nota > 60;
  });
  
  // Mostrar resultado
  if (todosAprobaron) {
    console.log("Todos los estudiantes aprobaron");
  } else {
    console.log("No todos los estudiantes aprobaron");
  }
  
  // Mostrar estudiantes que no aprobaron
  console.log("Estudiantes que no aprobaron:");
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota <= 60) {
      console.log(estudiantes[i].nombre + ": " + estudiantes[i].nota);
    }
  }