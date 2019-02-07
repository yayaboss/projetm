const mongoose = require('mongoose');

//ES6 promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function(done){
  //Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo');
  mongoose.connection.once('open',function(){
    console.log('connection has been made, now make fireworks...');
    done();
  }).on('error', function(error){
    console.log('Connection error', error);
  });

});
