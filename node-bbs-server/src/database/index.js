require('dotenv').config();

var db = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'limdo',
        password : process.env.DB_PASSWORD,
        database : 'nodeapptest',
    }
});

const ret = db.raw('select now()').then((item) => { console.log(item[0])})

module.exports = db