// Lista de productos
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
  
  // Aplicar impuesto del 15%
  let productosConImpuesto = productos.map(function(producto) {
    let precioConImpuesto = producto.precio * 1.15;
    return {
      nombre: producto.nombre,
      precioOriginal: producto.precio,
      precioConImpuesto: precioConImpuesto
    };
  });
  
  // Mostrar resultados
  console.log("Productos con impuesto:");
  for (let i = 0; i < productosConImpuesto.length; i++) {
    console.log(productosConImpuesto[i].nombre + ": $" + productosConImpuesto[i].precioConImpuesto);
  }