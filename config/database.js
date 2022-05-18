var mysql = require('mysql');
var db_info = {
    host: process.env.ENDPOINT,
    port: '3306',
    user: 'lohan',
    password: 'abcd123456!',
    database: 'mydb'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
