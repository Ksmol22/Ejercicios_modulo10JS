// Arreglo de usuarios
const usuarios = [
    {nombre: "Ana"},
    {nombre: "Carlos", },
    {nombre: "María"},
    {nombre: "Juan"},
    {nombre: "Laura"},
    {nombre: "Pedro"},
    {nombre: "Sofía"},
    {nombre: "Diego"},
    {nombre: "Valentina"},
    {nombre: "Gabriel"},
    {nombre: "Lucía"},
    {nombre: "Andrés"},
    {nombre: "Isabella"},
    {nombre: "Mateo"},
    {nombre: "Camila"},
    {nombre: "Daniel"},
    {nombre: "Paula"},
    {nombre: "Alejandro"},
    {nombre: "Valeria"},
    {nombre: "Santiago"}
  ];
  
  // Utilizamos reduce() para concatenar los nombres
  const nombresConcatenados = usuarios.reduce((acumulado, usuario) => {
    return acumulado + ' ' + usuario.nombre;
  }, '');
  
   // Mostrar cantidad de usuarios activos
  console.log(nombresConcatenados);
 