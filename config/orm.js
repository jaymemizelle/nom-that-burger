const connection = require('./connection.js');

module.exports = {

    selectAll: (table, cb) => {
        let query = "SELECT * FROM ?"
        connection.query(query, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    // End selectAll method
    },


    insertOne: (tableForInsert, whatToInsert, cb) => {
        let query = "INSERT INTO ? VALUE ?"
        connection.query(query, [tableForInsert, whatToInsert], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    // End insertOne method
    },


    updateOne: (tableToUpdate, whatToUpdate, itemId, cb) => {
        let query = "UPDATE ? SET ? WHERE id = ?"
        connection.query(query, [tableToUpdate, whatToUpdate, itemId], (err, result) => {
            if (err) throw err;
            cb(result)
        });
    // End updateOne method
    }




// End module.exports object
}