const orm = require('../config/orm.js');

// Call orm functions here using burger specific input

const burger = {


    selectAll: function(cb) {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    insertOne: function(cb) {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    updateOne: function(cb) {
        orm.selectAll('burgers', objColVals, condition, id, (res) => {
            cb(res);
        });
    },


}







// Export burger.js
module.exports = burger;