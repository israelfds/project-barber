const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://admin:barberproject@barber-mongo:27017/barbershop?authSource=admin', {  // 'mongo' é o nome do serviço no docker-compose
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1); // Encerra o processo em caso de erro
    }
};

module.exports = connectDB;
