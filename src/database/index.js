const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://root:TaNOWhTrDrv8SmHH@engage.edhut.mongodb.net/engage?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.log('Erro ao conectar ao MongoDB: ' + err);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
