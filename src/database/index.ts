import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  name: 'myConnection',
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test',
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

dataSource.initialize();
