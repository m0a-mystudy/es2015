// Update with your config settings.

let dbparams = {
    client: 'mysql',
    connection: {
      database: 'employees',
      user:     'root',
      password: 'tx2d236dg'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        directory: './db/migrations',
        tableName: 'knex_migrations'
    }
}
module.exports = {

  development: dbparams,
  staging: dbparams,
  production: dbparams
};
