// Lista de usuarios con estado
let usuarios = [
    {nombre: "Ana", estado: "activo"},
    {nombre: "Carlos", estado: "inactivo"},
    {nombre: "María", estado: "activo"},
    {nombre: "Juan", estado: "activo"},
    {nombre: "Laura", estado: "inactivo"},
    {nombre: "Pedro", estado: "activo"},
    {nombre: "Sofía", estado: "activo"},
    {nombre: "Diego", estado: "inactivo"},
    {nombre: "Valentina", estado: "activo"},
    {nombre: "Gabriel", estado: "activo"},
    {nombre: "Lucía", estado: "inactivo"},
    {nombre: "Andrés", estado: "activo"},
    {nombre: "Isabella", estado: "activo"},
    {nombre: "Mateo", estado: "inactivo"},
    {nombre: "Camila", estado: "activo"},
    {nombre: "Daniel", estado: "activo"},
    {nombre: "Paula", estado: "inactivo"},
    {nombre: "Alejandro", estado: "activo"},
    {nombre: "Valeria", estado: "activo"},
    {nombre: "Santiago", estado: "inactivo"}
  ];
  
  // Filtrar usuarios activos
  let usuariosActivos = usuarios.filter(function(usuario) {
    return usuario.estado === "activo";
  });
  
  // Mostrar cantidad de usuarios activos
  console.log("Cantidad de usuarios activos: " + usuariosActivos.length);
  
  // Mostrar lista de usuarios activos
  console.log("Lista de usuarios activos:");
  for (let i = 0; i < usuariosActivos.length; i++) {
    console.log(usuariosActivos[i].nombre);
  }
  
  // Calcular porcentaje de usuarios activos
  let porcentajeActivos = (usuariosActivos.length / usuarios.length) * 100;
  console.log("Porcentaje de usuarios activos: " + porcentajeActivos.toFixed(2) + "%");