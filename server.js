var express      = require('express'),
    cors         = require('cors'),
    bodyParser   = require('body-parser'),
    mongoose     = require('mongoose'),
    morgan       = require('morgan'),
    cookieParser = require('cookie-parser'),
    session      = require('express-session'),
    passport     = require('passport'),
    app          = express();

require('./config/passport')(passport);

//Debug setting
var debug = true;

//Middleware

app.use(session({
    secret: 'thisIsASecretIDontIntenedToKeepLongTerm',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Controllers
var StatsSheetCtrl  = require('./controllers/StatsSheetCtrl');
var MiscSheetCtrl   = require('./controllers/MiscSheetCtrl');
var SpellsSheetCtrl = require('./controllers/SpellsSheetCtrl');
var UserCtrl        = require('./controllers/UserCtrl');
var CharacterCtrl   = require('./controllers/CharacterCtrl');

app.post('/api/auth', passport.authenticate('local-signup', {
    successRedirect : '/registerSuccess',
    failureRedirect : '/registerFailure'
}));

//Routes 
app.get('/registerSuccess', function(req, res) {
    req.user.password = '';
    res.send(req.user);
})
app.get('/registerFailure', function(req, res) {
    res.status(500).send('Failure to authenticate user');
})

app.get   ('/api/character/stats',      StatsSheetCtrl.read);
app.post  ('/api/character/stats',      StatsSheetCtrl.create);
app.put   ('/api/character/stats/:id',  StatsSheetCtrl.update);
app.delete('/api/character/stats/:id',  StatsSheetCtrl.delete);

app.get   ('/api/character/misc',       MiscSheetCtrl.read);
app.post  ('/api/character/misc',       MiscSheetCtrl.create);
app.put   ('/api/character/misc/:id',   MiscSheetCtrl.update);
app.delete('/api/character/misc/:id',   MiscSheetCtrl.delete);

app.get   ('/api/character/spells',     SpellsSheetCtrl.read);
app.post  ('/api/character/spells',     SpellsSheetCtrl.create);
app.put   ('/api/character/spells/:id', SpellsSheetCtrl.update);
app.delete('/api/character/spells/:id', SpellsSheetCtrl.delete);

app.get   ('/api/character',            CharacterCtrl.read);
app.post  ('/api/character',            CharacterCtrl.create);
app.put   ('/api/character/:id',        CharacterCtrl.update);
app.delete('/api/character/:id',        CharacterCtrl.delete);

app.get   ('/api/user',                 UserCtrl.read);
app.post  ('/api/user',                 UserCtrl.create);
app.put   ('/api/user/:id',             UserCtrl.update);
app.delete('/api/user/:id',             UserCtrl.delete);

//Connection Information
var port = 8000;
if(debug) var mongoUri = 'mongodb://localhost:27017/character-sheet-test';
else var mongoUri = 'mongodb://localhost:27017/character-sheet';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, () => {
    console.log('Listening on port: ', port);
});