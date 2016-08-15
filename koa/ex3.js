let koa = require('koa');
let parse = require('co-body');

let app = koa();


app.use(function *(next){
    // only accepted POST request
    if(this.method !== 'POST') {
        return yield next;
    }

    var json =  yield parse(this, {limit: '1kb'});
    if(!json.name) this.throw(400, '.name required');
    this.body = json.name.toUpperCase();
    // this.body = {
    //     test: json.name.toUpperCase(),
    //     method: this.method
    // };
});

let port = process.argv[2] || 3000;
app.listen(port);
