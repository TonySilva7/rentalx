import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = 'db_rentx'; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  })
    .then((conn) => {
      console.log(`Database connected 📦 -> ${conn.name}`);
    })
    .catch((err) => {
      console.log('Database fail 💩: ', err);
    });
});
