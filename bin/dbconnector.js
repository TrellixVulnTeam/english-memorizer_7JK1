/**
 * Created by bruce on 2017-05-05.
 */

var mysql = require('mysql');
var google = require('googleapis');

google.auth.getApplicationDefault(function (err, authClient) {
    if (err) return cb(err);
});

var dbcon = mysql.createConnection({
    host: 'localhost',
    user: 'eng',
    password: '3237a594e58baced6bd677a9431b7cda',
    database: 'engmem',
    socketPath: '/cloudsql/english-memorizer:us-central1:english-memorizer-db'
});

dbcon.connect(function (err) {
    if (err) console.log("cannot connect due to", err);
    else console.log("connected");
});

module.exports = dbcon;