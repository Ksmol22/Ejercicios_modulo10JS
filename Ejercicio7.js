// Lista de productos con precios originales y precios con descuento
let productos = [
    {nombre: "Laptop", precioOriginal: 1000000, precioConDescuento: 950000},
    {nombre: "Smartphone", precioOriginal: 500000, precioConDescuento: 500000},
    {nombre: "Tablet", precioOriginal: 300000, precioConDescuento: 270000},
    {nombre: "Smartwatch", precioOriginal: 200000, precioConDescuento: 200000},
    {nombre: "Auriculares", precioOriginal: 100000, precioConDescuento: 90000},
    {nombre: "Cámara", precioOriginal: 800000, precioConDescuento: 800000},
    {nombre: "Impresora", precioOriginal: 250000, precioConDescuento: 225000},
    {nombre: "Monitor", precioOriginal: 400000, precioConDescuento: 400000},
    {nombre: "Teclado", precioOriginal: 80000, precioConDescuento: 72000},
    {nombre: "Mouse", precioOriginal: 50000, precioConDescuento: 50000},
    {nombre: "Disco Duro", precioOriginal: 150000, precioConDescuento: 135000},
    {nombre: "Router", precioOriginal: 120000, precioConDescuento: 120000},
    {nombre: "Altavoces", precioOriginal: 180000, precioConDescuento: 162000},
    {nombre: "Proyector", precioOriginal: 600000, precioConDescuento: 600000},
    {nombre: "Escáner", precioOriginal: 200000, precioConDescuento: 180000},
    {nombre: "Webcam", precioOriginal: 70000, precioConDescuento: 70000},
    {nombre: "Micrófono", precioOriginal: 90000, precioConDescuento: 81000},
    {nombre: "Consola de juegos", precioOriginal: 700000, precioConDescuento: 700000},
    {nombre: "Batería externa", precioOriginal: 60000, precioConDescuento: 54000},
    {nombre: "Adaptador HDMI", precioOriginal: 40000, precioConDescuento: 40000}
  ];
  
  // Verificar si algún producto tiene descuento
  let hayDescuento = productos.some(function(producto) {
    return producto.precioConDescuento < producto.precioOriginal;
  });
  
  // Mostrar resultado
  if (hayDescuento) {
    console.log("Sí hay productos con descuento");
  } else {
    console.log("No hay productos con descuento");
  }
  
  // Mostrar productos con descuento
  console.log("Productos con descuento:");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precioConDescuento < productos[i].precioOriginal) {
      let descuento = productos[i].precioOriginal - productos[i].precioConDescuento;
      let porcentajeDescuento = (descuento / productos[i].precioOriginal) * 100;
      console.log(productos[i].nombre + ": Precio original $" + productos[i].precioOriginal + 
                  ", Precio con descuento $" + productos[i].precioConDescuento + 
                  " (Descuento: " + porcentajeDescuento.toFixed(2) + "%)");
    }}