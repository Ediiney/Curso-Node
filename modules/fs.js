const { error } = require('console');
const fs = require('fs');
const path = require('path');

// Criar pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//   if (error) {
//     return console.log('Error creating directory:', error);
//   } 
//     console.log('Directory created successfully!');
// });

// Criar e escrever arquivo
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (error) => {
//   if (error) {
//     return console.log('Error creating file:', error);
//   }
//     console.log('File created successfully!');
// });

// Adicionar conteudo ao arquivo
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello Node!', (error) => {
//   if (error) {
//     return console.log('Error append file:', error);
//   }
//     console.log('File append successfully!');
// });

// Ler arquivo
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (error, data) => {
//   if (error) {
//     return console.log('Error read file:', error);
//   }
//     console.log(data);
// });