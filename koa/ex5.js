let koa = require('koa');

let app = koa();

app.use(function *(next){
    if (this.request.is('json')) {
        this.body = {message: 'hi!'};
    } else {
        this.body = 'ok';
    }
});


let port = process.argv[2] || 3000;
app.listen(port);
