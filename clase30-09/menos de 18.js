function menores(elemento) {
  return elemento >= 18;
}
var filtrados = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 5465465465465464466,
].filter(menores);
console.log(filtrados);
