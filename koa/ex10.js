let koa = require('koa');
let views = require('co-views');

var app = koa();
var render = views(__dirname + '/views', {
    ext: 'ejs'
});

let user = {
    name:{
        first: 'Tobi',
        last: 'Holowaychuk'
    },
    species: 'ferret',
    age: 3
};


app.use(function *(){
    this.body = yield render('user', {user});
});

app.listen(process.argv[2]);