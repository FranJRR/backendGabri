const fs = require('fs');

try {
  const data = fs.readFileSync('/Users/FRAN/backendGabri/06/text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
