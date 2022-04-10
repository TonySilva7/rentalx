import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  name: 'myConnection',
  type: 'postgres',
  host: 'db_rentx', // database name in docker-compose
  port: 5432,
  username: 'docker',
  password: '1234',
  database: 'rentx',
  // synchronize: true,
  // logging: true,
  // entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  // migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  // subscribers: [`${__dirname}/subscriber/*{.ts,.js}`],
  // cli: {
  //   entitiesDir: 'src/database/entities',
  //   migrationsDir: 'src/database/migrations',
  //   subscribersDir: 'src/database/subscriber',
  // },
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized! 📦');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
