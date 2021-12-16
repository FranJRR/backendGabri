// const coche = {
//   marca: 'seat',
//   modelo: 'león',
//   color: 'blanco',
// };

// coche.color = 'azul';

// const key = 'modelo';
// console.log(coche[key]);

// const operaciones = {
//   suma: (a, b) => a + b,
//   resta: (a, b) => a - b,
//   multiplicar: (a, b) => a * b,
//   dividir: (a, b) => a / b,
// };

// const key = 'suma';
// console.log(operaciones[key](7, 3));

const persona = {
  nombre: 'Francisco Jose',
  apellido: 'Rebollo Rendon',
  edad: 21,
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(persona.nombreCompleto());
