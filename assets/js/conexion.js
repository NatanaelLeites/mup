import mysql from 'mysql';
let conexion = mysql.createConnection({
    host: 'localhost',
    database: '', /* nombre de la base de datos */
    user: 'root',
    password: ''/* en caso de waamp no se usa password */
});


conexion.connect(function (error) {
    return error ? error : console.log('Conectado')
});

export default conexion;


/* link de pagamento */
/*  */