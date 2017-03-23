/**
 * Created by matheus on 13/01/17.
 */
var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        port: '8889',
        user: 'root',
        password: 'root',
        database: 'bitnami_moodle'
    });
}

module.exports = function () {
    return createDBConnection;
}