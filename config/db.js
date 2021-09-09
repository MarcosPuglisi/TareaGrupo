const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const conectarDB = async () => {
    try {        
        await mongoose.connect(process.env.STRING_SERVER_MONGO, {})
        console.log("conectado a MongoDB");
    } catch (error) {
        console.log(error);
        process.exit(1); // deniene la app
    }
}
module.exports = conectarDB;
