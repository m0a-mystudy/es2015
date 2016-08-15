let koa = require('koa');
let app = koa();

app.use(function *(){
    this.body = 'hello koa';
});

let port = process.argv[2];
app.listen(port);
