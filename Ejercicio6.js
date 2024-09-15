// Lista de estudiantes (reutilizando la del ejercicio anterior)
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
  
  // Calcular el promedio de notas
  let sumaNotas = estudiantes.reduce(function(acumulador, estudiante) {
    return acumulador + estudiante.nota;
  }, 0);
  
  let promedioNotas = sumaNotas / estudiantes.length;
  
  // Mostrar resultado
  console.log("El promedio de notas es: " + promedioNotas.toFixed(2));
  
  // Mostrar todas las notas
  console.log("Notas de los estudiantes:");
  for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].nombre + ": " + estudiantes[i].nota);
  }