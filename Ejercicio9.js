// Lista de nombres
let nombres = [
    "Ana", "Carlos", "María", "Juan", "Laura",
    "Pedro", "Sofía", "Diego", "Valentina", "Gabriel",
    "Lucía", "Andrés", "Isabella", "Mateo", "Camila",
    "Daniel", "Paula", "Alejandro", "Valeria", "Santiago"
  ];
  
  // Transformar nombres a mayúsculas
  let nombresMayusculas = nombres.map(function(nombre) {
    return nombre.toUpperCase();
  });
  
  // Mostrar nombres originales
  console.log("Nombres originales:");
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }
  
  // Mostrar nombres en mayúsculas
  console.log("\nNombres en mayúsculas:");
  for (let i = 0; i < nombresMayusculas.length; i++) {
    console.log(nombresMayusculas[i]);
  }
  
  // Verificar si algún nombre era todo en minúsculas originalmente
  let algunoEraTodoMinusculas = nombres.some(function(nombre) {
    return nombre === nombre.toLowerCase();
  });
  
  if (algunoEraTodoMinusculas) {
    console.log("\nAlguno de los nombres originales estaba completamente en minúsculas.");
  } else {
    console.log("\nNinguno de los nombres originales estaba completamente en minúsculas.");
  }