const express = require('express');
const app = express();
const conectarDB = require('./config/db');
const home = require('./routes/home')


require('dotenv').config({ path: './config/.env' });

const port = process.env.PORT_SERVER || 4500

// llamar a la conectar
conectarDB();

// lectura / habilitar express.json 
app.use(express.json({ extend: true }));

//Routes

//app.use('/', require('./routes/'))
app.use('/', home);


app.listen(port, () => {
    console.log(`server escuchando en port :${port}`);
})
