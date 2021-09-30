var readline = require('readline');

var randomNum = Math.round(Math.random() * 100);
var lives = 10;

var terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.setPrompt('Dime un numero entre el 1 al 100: ');
terminal.prompt();
terminal.on('line', function (respuesta) {
  var respuestaNum = parseInt(respuesta);

  if (respuestaNum > randomNum) {
    console.log('Muy alto');
    console.log('Tu tienes ' + lives + ' vidas restantes');
  } else if (respuestaNum < randomNum) {
    console.log('Muy bajo');
    console.log('Tu tienes ' + lives + ' vidas restantes');
  } else if (respuestaNum === randomNum) {
    console.log('ERES UN MAQUINA');
    console.log('Tu has perdido ' + (11 - lives) + ' vidas');
    process.exit(0);
  } else {
    console.log('ILLO K EZO NO ES UN NUMERO');
    console.log('Tu tienes ' + lives + ' vidas');
  }

  lives--;
  if (lives == 0) {
    console.log('VAYA PARGUELA');
    process.exit(0);
  }

  terminal.prompt();
});

terminal.on('close', function () {
  console.log('HASTA OTRA MASTODONTE');
  process.exit(1);
});
