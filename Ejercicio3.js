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
  
  // Calcular el total de la compra
  let totalCompra = productos.reduce(function(acumulador, producto) {
    return acumulador + producto.precio;
  }, 0);
  
  // Mostrar el total
  console.log("El total de la compra es: $" + totalCompra);
  
  // Mostrar lista de productos comprados
  console.log("Productos comprados:");
  for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre + ": $" + productos[i].precio);
  }