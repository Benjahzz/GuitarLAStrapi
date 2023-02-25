module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cff5a4hgp3jjsefh7a1g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_qn1q'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'gUJhyMeG33Pl8eY7BnTE6cqJaCXTebGl'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
