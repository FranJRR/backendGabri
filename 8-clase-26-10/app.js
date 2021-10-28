const got = require('got');

(async () => {
  try {
    const response = await got('https://sindresorhus.com');
    console.log(response.body);
    //=> '<!doctype html> ...'
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'
  }
})();
console.log(got);

/* Async / Await */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolve');
    }, ms);
  });
}

async function init() {
  await sleep(1000);
  console.log('hola');
  await sleep(1000);
  console.log('Piensa en un numero entre el 1 - 10');
  await sleep(3000);
  console.log('Multiplicalo por 9');
  await sleep(5000);
  console.log('Suma sus cifras ');
  await sleep(3000);
  console.log('Restale 5');
  await sleep(3000);
  console.log('Espera que lo adivino');
  await sleep(5000);
  console.log('Es el 4!!!');
}
init();
