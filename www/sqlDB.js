var exec = require('cordova/exec');

exports.copy = function(dbname, location, success, error) {
  exec(success, error, "sqlDB", "copy", [dbname, location]);
};

exports.remove = function(dbname, location, success,error) {
  exec(success, error, "sqlDB", "remove", [dbname, location]);
};

exports.copyDbToStorage = function(dbname,location,destination, success,error){
  exec(success, error, "sqlDB", "copyDbToStorage", [dbname, location, destination]);
};

exports.copyDbFromStorage = function(dbname,location,source, success,error){
  exec(success, error, "sqlDB", "copyDbFromStorage", [dbname, location, source]);
};

exports.test = function(success,error){
  exec(success, error, "sqlDB", "test", []);
};

window.echo = function(str, callback) {
    exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "sqlDB", "echo", [str]);
};
