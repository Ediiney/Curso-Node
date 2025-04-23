const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename)); // path.js

// Directory name
console.log(path.dirname(__filename)); // /home/ediney/Documentos/NodeJS/NodeJS-Modules/modules

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename)); // { root: '/', dir: '/home/ediney/Documentos/NodeJS/NodeJS-Modules/modules', base: 'path.js', ext: '.js', name: 'path' }

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); // /home/ediney/Documentos/NodeJS/NodeJS-Modules/modules/test/hello.html

// Normalize path
console.log(path.normalize('/home/ediney/Documentos/NodeJS/NodeJS-Modules/modules/test/hello.html')); // /home/ediney/Documentos/NodeJS/NodeJS-Modules/modules/test/hello.html