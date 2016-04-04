var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var livereload = require('livereload');
var reloadServer = livereload.createServer();
reloadServer.watch([__dirname + "/public/css", __dirname + "/public/js", __dirname + "/views"]);

global.__lib = __dirname + '/public/';
// require(__lib + 'init.js')(); // External Dependencies (Parse, Mailgiun, password)


////////////////////////////////////////////////
///////////////*~ Basic Routes ~*///////////////
////////////////////////////////////////////////

app.get('/', function (req, res)
{
  res.render('homev2.html');
})

app.get('/resume', function (req, res)
{
  console.log(global.__lib)
  res.sendFile(global.__lib + '/cv.pdf');
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
