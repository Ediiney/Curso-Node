const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
  const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DB } = process.env;

  const uri = `mongodb+srv://${MONGODB_USERNAME}:${encodeURIComponent(MONGODB_PASSWORD)}@cluster0.zxzostg.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri); // sem as opções deprecadas
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

module.exports = connectToDatabase;
