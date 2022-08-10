const productos = [
  { id: 1, articulo: "Grande Muzzarella", precio: 1000 },
  { id: 2, articulo: "Grande Jamón y Morrones", precio: 1500 },
  { id: 3, articulo: "Grande Fugazzeta", precio: 1400 },
  { id: 4, articulo: "Grande  Napolitana", precio: 1300 },
  { id: 5, articulo: "Chica Muzzarella", precio: 700 },
  { id: 6, articulo: "Chica Jamón y Morrones", precio: 1000 },
  { id: 7, articulo: "Chica Fugazzeta", precio: 800 },
  { id: 8, articulo: "Chica Napolitana", precio: 1200 },
  { id: 9, articulo: "Cerveza Imperial 1 l.", precio: 140 },
  { id: 10, articulo: "Agua saborizada Aquarius Pomelo 1 l.", precio: 140 },
  { id: 11, articulo: "Coca Cola 1.5 l.", precio: 140 },
];

const carrito = [];

//fx que ofrece opciones y devuelve un número, ingresado por el usuario (asociado a un producto)

function elegirArticulo() {
  let textoPregunta =
    "Por favor, seleccione el producto para agregar al carrito \n";

  //ciclo que recorre los productos y los muestra al usuario
  for (let producto of productos) {
    textoPregunta +=
      producto.id +
      "  " +
      producto.articulo +
      "..........." +
      "$" +
      producto.precio +
      "\n";
  }
  //ofrecimiento al cliente de los productos para que elija
  let eleccionArticulo = parseInt(prompt(textoPregunta));
  //validación de respuesta, cuando el usuario tiene que ingresar una opción de producto
  while (
    eleccionArticulo < 1 ||
    eleccionArticulo > 11 ||
    /\D/.test(eleccionArticulo) ||
    eleccionArticulo == ""
  ) {
    alert(
      "Por favor ingrese un valor válido \n seleccione el producto para agregar al carrito"
    );
    eleccionArticulo = parseInt(prompt(textoPregunta));
  }

  return eleccionArticulo;
}

//fx que a partir del número ingresado por el usuario busca el producto(objeto) por el id
function buscarProducto(id) {
  return productos.find((elemento) => elemento.id == id);
}

//fx que toma el objeto encontrado por el id (producto) y lo incluye en el carrito (array)
function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log(carrito);
}

//fx que compara el id elegido por el usuario con el de los productos del carrito, y elimina el producto
function eliminarPorId(id) {
  let posicion = carrito.indexOf(articulo, articulo.id == id);
  carrito.splice(posicion, 1);
}

let articuloElegido = elegirArticulo();
let productoBuscado = buscarProducto(articuloElegido); //fx busca el producto en el array(objeto) por el id y lo guarda en producatoElegido
console.log(productoBuscado); //muestro el objeto que encontró la fx por el id

agregarAlCarrito(productoBuscado); //AGREGO EL OBJETO (Producto) al array CARRITO

let seguirComprando = prompt(
  "Quiere elegir un nuevo producto? \n SI \n NO"
).toUpperCase();
while (seguirComprando == "SI") {
  let articuloElegido = elegirArticulo();
  let productoBuscado = buscarProducto(articuloElegido); //fx busca el producto en el array(objeto) por el id y lo guarda en producatoElegido
  console.log(productoBuscado); //muestro el objeto que encontró la fx por el id
  agregarAlCarrito(productoBuscado);
  seguirComprando = prompt(
    "Quiere elegir un nuevo producto? \n SI \n NO"
  ).toUpperCase();
  if (seguirComprando != "SI" && seguirComprando != "NO") {
    seguirComprando = prompt(
      "Por favor, ingrese un valor correcto \n Para seguir comprando, ingrese SI, \n Para no seguir comprando, ingrese NO"
    ).toUpperCase();
  }
}
if (seguirComprando == "NO") {
  let textoConfirmacion = "PRODUCTOS AGREGADOS AL CARRITO: \n ";

  //ciclo que recorre los productos y los muestra al usuario
  for (let productos of carrito) {
    textoConfirmacion +=
      productos.id +
      "  " +
      productos.articulo +
      "..........." +
      "$" +
      productos.precio +
      "\n";
  }
  alert(textoConfirmacion);
}
let totalAPagar = 0;
totalAPagar = carrito.reduce((acc, el) => acc + el.precio, 0);
alert("el total a pagar es igual a $ " + totalAPagar);
