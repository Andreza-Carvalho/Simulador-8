const mongoose = require('mongoose'); 
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://assc_db_user:3XLg88Qo2jmGN6eD@cluster0.2jhmnkf.mongodb.net/?appName=Cluster0');
    console.log("✅ Conectado ao MongoDB com sucesso!");
  } catch (error) {
    
    console.error("❌ Erro ao conectar ao MongoDB:", error);
  }
}

module.exports = { connect }; 