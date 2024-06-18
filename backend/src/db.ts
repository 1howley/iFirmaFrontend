import { createConnection, Connection } from 'mysql2';

const connection: Connection = createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: ''
});

connection.connect((err) => {
  if (err) {
    console.error('> Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('> Conectado ao banco de dados MySQL.');
});

export default connection;
