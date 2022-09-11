
/* importando módulos do app */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

/*preparando exportação do módulo app */
var app = express();

/* configurando view engine e diretorios de views */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurando middlewares */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
//app.use(expressValidator()); // Verificar commo o express é utilizado atualmente

/* efetua autoload das rotas, models e controles no app */
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);


module.exports = app;