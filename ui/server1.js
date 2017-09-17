var express = require('express');

var morgan = require('morgan');

var path = require('path');


var Pool=require('pg'.pool);


 var config = {
 
	     user: 'srivastabhishek786',

	     database: 'srivastabhishek786',
	
     host: 'db.imad.hasura-app.io',
	
     port:'5432',
     password:process.env.DB_PASSWORD
 
};

app.get('/ui/madi.png', function (req, res) 
{
 
	res.sendFile(path.join(__dirname, 'ui', 'madi.png'));

});
var pool=new Pool(config);



app.get('/test-db', function(req,res){
 
 pool.query('SELECT * from test',function(err,result){

       	
	if(err){
    
	       res.status(500).send(err.toString());

        }
        
	else{
    
	       res.send(JSON.stringify(result)); 
  
     	}
 
    
    });

});


var port = 80;

app.listen(port, function ()
 {
  
	console.log(`IMAD course app listening on port ${port}!`);

});
