const readline = require('readline');
const prompt = require('prompt-sync')();
const fs = require('fs');

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function editor() {
  readL.question(
    `Selecciona una de las siguientes opciones:
    1.Crear nota.
    2.Editar nota.
    3.Eliminar nota.
    `,
    (option) => {
      switch (option) {
        case '1':
          try {
            document = prompt('Nombre para el archivo');
            content = prompt('Escribe el contenido');
            fs.writeFileSync(`${document}.note`, `${content}`, 'utf-8');
            console.log('Creado');
          } catch (err) {
            console.error(err);
          }
          break;

        case '2':
          try {
            console.log(fs.readdirSync(__dirname));
            document = prompt('Que archivo quieres editar');
            content = prompt('Cambia el contenido');
            fs.writeFileSync(`${document}.note`, `${content}`, 'utf-8');
            console.log(`Se ha guardado con exito "${document}.note"`);
          } catch (err) {
            console.error(err);
          }
          break;

        case '3':
          try {
            document = prompt('Que quiere eliminar');
            fs.unlinkSync(`${__dirname}/${document}.note`);
            console.log(`"${document}.note" ha sido eliminado`);
          } catch (err) {
            console.error(err);
          }
          break;

        default:
          console.log('Eso no es valido prueba otra vez');
          break;
      }
      readL.close();
    }
  );
}

editor();
