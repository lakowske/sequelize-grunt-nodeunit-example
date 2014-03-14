var Sequelize = require('sequelize');

exports.testDB = function testDB() {
    return new Sequelize('database', 'username', 'password', {
        // sqlite! now!                                                                                                                                                                
        dialect: 'sqlite',

        // the storage engine for sqlite                                                                                                                                                                
        // - default ':memory:'                                                                                                                                                                
        storage: __dirname + '/database.sqlite'
    });
}
