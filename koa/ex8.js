let koa = require('koa');

var app = koa();
app.keys=['secrent', 'keys'];

app.use(function *useCookies(){
    var n = ~~this.cookies.get('view', {signed: true}) + 1;
    this.cookies.set('view', n, {signed: true});
    // this.body = {
    //     'respond body': `${n} views`,
    //     'set-cookie': `view=${n}`
    // };
    this.body = `${n} views`;

});

app.listen(process.argv[2]);