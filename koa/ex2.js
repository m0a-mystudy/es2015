let koa = require('koa');
let app = koa();

app.use(function* (next) {
    if (this.path !== '/404') return yield next;
    this.body = 'page not found';
});

app.use(function* (next) {
    if (this.path !== '/500') return yield next;
    this.body = 'internal server error';
});


app.use(function *(){
    this.body = 'hello koa';
});

let port = process.argv[2];
app.listen(port);
