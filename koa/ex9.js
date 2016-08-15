let koa = require('koa');
let session = require('koa-session');

var app = koa();
app.keys=['secrent', 'keys'];

app.use(session(app));

app.use(function *useCookies(){
    var n = this.session.views || 0;
    this.session.views = ++n;
    this.body = `${n} views`;
    // this.body = this.session;

});

app.listen(process.argv[2]);