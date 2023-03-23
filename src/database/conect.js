const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodeyt.xfqdwxr.mongodb.net/database?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      console.log('conectado ao banco de dados');
    } catch (error) {
      console.error('ocorreu um erro ao se conectar ao banco de dados: ', error);
    }
  };
  
  

module.exports = connectToDatabase