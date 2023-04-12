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
export default Router;
