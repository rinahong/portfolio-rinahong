// Update with your config settings.
const sharedConfig = { //common properties shared by object elements.
  client: 'postgresql',
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      database: 'rinahong_dev'
    }
  },

  staging: {
    ...sharedConfig,
    connection: {
      database: 'rinahong_staging'
    }
  },

  production: {
    ...sharedConfig,
    connection: {
      database: 'rinahong_production'
    }
  }
};
