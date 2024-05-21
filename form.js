let mysql = require('mysql');

let connection = mysql.createConnection({
     host: 'localhost',
     user: 'mariadb',
     password: 'mariadb',
     database: 'mariadb'
});


connection.query("INSERT into formularz VALUES('Krystian','Grzybowy','632476327642');",function(err,rows){
    if(err)  
    {
        console.log(err);
    }
    else
    {
        console.log(rows);
    }
});