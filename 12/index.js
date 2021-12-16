/* eslint-disable no-console */
import chalk from 'chalk';

const youShouldNeverUseVar = 'This is my very long line that eslint should check as an error ............................................';

function myFunction(used) {
  if (used) {
    console.log(chalk.blue(used));
    console.log(youShouldNeverUseVar);
  }
}

export default { myFunction };
