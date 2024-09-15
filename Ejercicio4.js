// Lista de productos (reutilizando la del primer ejercicio)
let productos = [
    {nombre: "Laptop", precio: 1000000},
    {nombre: "Smartphone", precio: 500000},
    {nombre: "Tablet", precio: 300000},
    {nombre: "Smartwatch", precio: 200000},
    {nombre: "Auriculares", precio: 100000},
    {nombre: "Cámara", precio: 800000},
    {nombre: "Impresora", precio: 250000},
    {nombre: "Monitor", precio: 400000},
    {nombre: "Teclado", precio: 80000},
    {nombre: "Mouse", precio: 50000},
    {nombre: "Disco Duro", precio: 150000},
    {nombre: "Router", precio: 120000},
    {nombre: "Altavoces", precio: 180000},
    {nombre: "Proyector", precio: 600000},
    {nombre: "Escáner", precio: 200000},
    {nombre: "Webcam", precio: 70000},
    {nombre: "Micrófono", precio: 90000},
    {nombre: "Consola de juegos", precio: 700000},
    {nombre: "Batería externa", precio: 60000},
    {nombre: "Adaptador HDMI", precio: 40000}
  ];
  
  // Verificar si hay algún producto cuyo precio sea menor a $50000
  let hayProductoBarato = productos.some(function(producto) {
    return producto.precio < 50000;
  });
  
  // Mostrar resultado
  if (hayProductoBarato) {
    console.log("Sí hay productos con precio menor a $50000");
  } else {
    console.log("No hay productos con precio menor a $50000");
  }
  
  // Mostrar productos baratos (si los hay)
  console.log("Productos con precio menor a $50000:");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio < 50000) {
      console.log(productos[i].nombre + ": $" + productos[i].precio);
    }
  }