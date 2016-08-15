let koa = require('koa');
let fs = require('fs');

let app = koa();

app.use(function *(next){
    if (this.path !== '/json') return yield next;
    this.body = { foo: 'bar' };
});

app.use(function *(next){
    if (this.path !== '/stream') return yield next;
    if (process.argv.length <= 3) this.throw(400, 'file required');
    this.body = fs.createReadStream(process.argv[3]);
});

let port = process.argv[2] || 3000;
app.listen(port);
