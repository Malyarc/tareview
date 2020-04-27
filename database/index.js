var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

connection.connect();

// create/use database if not exist & create/use table if not exist
connection.query('CREATE DATABASE IF NOT EXISTS userslist;', (err) => {
  if (err) {
    //console.log('error connecting to database')
    //console.log(err);

  } else {
    //console.log('DB for USERS created');
    // SELECT DATABASE
    connection.query('USE userslist;',(err) => {
        if (err) {
          //console.log('error selecting database');
        } else {
            // CREATE TABLE IF NOT EXIST  USER | // ID                                       // NAME      // EMAIL      // PASSWORD
          connection.query(`CREATE TABLE IF NOT EXISTS user(
                id int auto_increment primary key,
                name text,
                email text,
                password text)`,
                (err) => {

                    if (err) {
                        //console.log('error creating table');
                    } else {
                    //console.log('success!');
                    }

                })
        }
    });

  }
})


// object's methods

var user = {
    // CREATE
    create: (data, callback) => {
      connection.query(`INSERT INTO user SET ?`, data, callback);
    },

    // FIND ONE
    findOne: (id, callback) => {
      connection.query(`SELECT ${id} FROM user`, callback);
    },

    // FIND ALL
    findAll: (callback) => {
      connection.query('SELECT * FROM user', callback);
    },

    // UPDATE ONE
    update: (id, data, callback) => {
      //ex: data = {password: 'thenewpw'}
      connection.query(`UPDATE user SET ${data} WHERE id=${id}`, callback)
    },

    // DELETE ONE
    delete: (id, callback) => {
      connection.query(`DELETE FROM user WHERE id=${id}`, callback);
    },
};

module.exports.user = user;
