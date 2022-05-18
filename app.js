var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');

db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function (req, res) {
    res.send('ROOT');
});

app.post('/insert', function (req, res) {
    var body = req.body;
    console.log(body.message);

    var sql = 'INSERT INTO mytable(message) values(?);'
    var params = [body.message];
    console.log(sql);
    conn.query(sql, params, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.send("SUCCESS");
    });
});

app.get('/select', function (req, res) {

    var sql = 'SELECT message FROM mytable ';
    console.log(sql);
    conn.query(sql, function(err, rows) {
        var lee = ""
        for (var temp in rows){
                lee+=temp.message
                console.log("1:"+temp)
                console.log("2:"+temp[0])
                console.log("3:"+temp[0].message)
        }
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.send(JSON.stringify(rows))
    });
});

app.listen(3000, () => console.log('Server is running on port 3000...'));
