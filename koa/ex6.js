let koa = require('koa');

let app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
    this.body = 'hello koa';
});

function responseTime() {
    return function* (next) {
        let start = new Date();
        yield next;
        this.set('X-Response-Time', new Date() - start);
        // set X-Response-Time head
    };
}

function upperCase() {
    return function* (next) {
    // do nothing
        yield next;
    // convert this.body to upper case
        this.body = this.body.toUpperCase();
    };
}

app.listen(process.argv[2]);