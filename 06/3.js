const { fileURLToPath } = require('url');

function decomposeUrl(urlI) {
  const url = new URL(urlI);
  const objectURL = {
    protocol: url.protocol,
    ipAdress: null,
    subDomain: url.hostname,
    domainName: url.host,
    folderTree: url.pathname,
    targetFile: fileURLToPath(urlI),
    argumentsFile: url.search,
  };

  return objectURL;
}

console.log(decomposeUrl('https://edabit.com/new/challenge/test.html'));
console.log(decomposeUrl('file:///C:UsersFRAN//backendGabri//06lol.txt'));
