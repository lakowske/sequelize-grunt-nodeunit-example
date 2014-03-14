var db = require('./SequelizeDatabase');
var uuid = require('uuid');

exports.testSequelize = function (test) {
    var  sequelize= db.testDB();

    sequelize.query("DROP TABLE IF EXISTS COMMANDLINES").success(function(myLines) {
        console.log('drop table COMMANDLINES');


        sequelize.query("CREATE TABLE IF NOT EXISTS COMMANDLINES (ID varchar(255), MYLINE TEXT)").success(function(myLines) {
            console.log('create table COMMANDLINES');
            var id = uuid.v1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'

            sequelize.query("INSERT INTO COMMANDLINES (ID, MYLINE) VALUES ('" + id + "', 'aline')").success(function(myLines){
                console.log('insert ' + id + " into commandlines");
                sequelize.query("SELECT * FROM COMMANDLINES").success(function(myLines) {
                    var cmdLine = myLines[0];

                    test.equal(id, cmdLine.ID,"should be " + id);

                    test.equal("aline", cmdLine.MYLINE,"should be aline");


                    console.log(cmdLine.ID);
                    console.log(cmdLine.MYLINE);
                    console.log(myLines);
                    test.done();
                });

            });


        });

    });

}

