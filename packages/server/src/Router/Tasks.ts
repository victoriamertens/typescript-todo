import express from 'express';
import pool from '../pool';
const Router = express.Router();

Router.get('/', (req, res) => {
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

Router.post('/', (req, res) => {
  console.log('Req.body:', req.body);
  let name: string = req.body.name;
  let description: string = req.body.description;
  let postQuery = `INSERT INTO "tasks" ("name", "description") VALUES ($1, $2);`;
  pool
    .query(postQuery, [name, description])
    .then((response) => {
      console.log(response.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});
export default Router;
