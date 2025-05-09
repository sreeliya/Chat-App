import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems",
    port: 3307
});

con.connect(function(err) {
    if (err) {
        console.log("MySQL connection error:", err);
    } else {
        console.log("Connected");
    }
});

export default con;
