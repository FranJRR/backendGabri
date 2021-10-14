const fs = require('fs');

try {
  const data = fs.readFileSync(
    '/Users/FRAN/backendGabri/clase07-10/text.txt',
    'utf8'
  );
  console.log(data);
} catch (err) {
  console.error(err);
}
