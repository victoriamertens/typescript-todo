import express from 'express';
import pool from './pool';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/test', (req, res) => {
  pool
    .query(`SELECT * FROM "tasks"`)
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
