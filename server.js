var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool=require('pg'.pool);

 var config = {
     user: 'srivastabhishek786',
     database: 'srivastabhishek786',
     host: 'db.imad.hasura-app.io',
     port:'5432',
     password:process.env. DB_PASSWORD
 };

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool(config)

app.get('/test-db', function(req,res){
   //make a select request 
   //return a response with the results
    pool.query('SELECT * from test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
        }
        else
        res.send(JSON.toStringify(result)); 
       } 
    });
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/index1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index1.html'));
});

var communication={
    title:"Communication Skills",
    date:"8 Sep 2017",
    heading:"Article-One",
    content:` <p>
                Hii...Everyone.
            </p>
            <p>
                The foremost quality you need to develop for minimizing barriers in communication is empathy. 
                Empathy is different from sympathy.
            </p>
            <p>
                If you see a beggar, who is shivering from cold or starving without money to eat food, and you offer him a woolen blanket or give him some money, you feel sympathy for the beggar. However, empathy is not feeling for, but feeling into.
            </p>`
};


function createTemplate(data){
        var title=data.title;
        var date = data.date;
        var content= data.content;
        var heading=data.heading;  
         

        var htmlTemplate=` <!doctype html>
        <head>
            <title>
               ${title}
            </title>
            <style>
                <link href="/ui/style.css" rel="stylesheet"/>
            </style>
            <meta name="viewport" content="width=device-width, initial scale-1"/>
        </head>
            <body>
                <div class="changing">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <br/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                        ${content}
                    </div>
            </body>
            
        </html>`
        ;
        return htmlTemplate;
}
//my file

app.get('/articleone', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});
app.get('/communication', function (req, res) {
  res.send(createTemplate(communication));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/abhishek1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'abhishek1.html'));
});

app.get('/article-one',function(req,res){
    res.send('Hii...Yogendra Shukla...What are u doing bro.');
});

app.get('/article-two',function(req,res){
    res.send('Article two requested and will be served here');
});

app.get('/article-three',function(req,res){
    res.send('Article three requested and will be served here');
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var names=[];
app.get('/submit-name/:name',function(req,res){
    var name=req.params.name;
    names.push(name);
    //Javascript Object Notation
    res.send(JSON.stringify  (names));
    
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
