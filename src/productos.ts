// Definimos la interfaz Producto
interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
}

// Creamos un arreglo de productos
const productos: Producto[] = [
  { nombre: 'Laptop', precio: 1200, categoria: 'Electrónica' },
  { nombre: 'Camiseta', precio: 20, categoria: 'Ropa' },
  { nombre: 'Libro', precio: 15, categoria: 'Educación' }
];

// Imprimimos el arreglo de productos
console.log(productos);