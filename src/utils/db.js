const mongoose = require('mongoose');

const user = process.env.USER;
const psw = process.env.PSW;
const dbName = process.env.DB_NAME;

const DB_URL = process.env.DB_URL


const connect = async () => {
    try{
        const db = await mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const {name,host} = db.connection;
        console.log(`Conectado a ${name} en ${host}`);
    }catch(error){
        console.log(`Error al conectar a la base de datos: ${error}`)
    }
};

module.exports = {connect};