import express from 'express';
import pool from '../pool';
const Router = express.Router();

Router.get('/', (req, res) => {
  pool
    .query(
      `SELECT "tasks"."id", "tasks"."name", "tasks"."description", "tasks"."completed",json_agg ( "sub_tasks".*) FILTER (WHERE "sub_tasks"."id" IS NOT NULL) AS sub_tasks
      FROM "tasks" 
      LEFT JOIN "sub_tasks" ON "sub_tasks"."task_id" = "tasks"."id"
      GROUP BY "tasks"."id";  `
    )
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

Router.get('/categories', (req, res) => {
  pool
    .query(`SELECT * FROM "categories";`)
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
      console.log('Response:', response);
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});
export default Router;

Router.post('/sub-tasks', (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  let task_id = req.body.task_id;
  let subTaskPostQuery = `INSERT INTO "sub_tasks" ("name", "description", "task_id") VALUES ($1, $2, $3);`;
  pool
    .query(subTaskPostQuery, [name, description, task_id])
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

Router.put('/', (req, res) => {
  let task_id = req.body.task_id;
  let completed = req.body.completed;
  let taskPutQuery = `UPDATE tasks 
  SET "completed" = $1 
  WHERE "id" = $2; `;
  pool
    .query(taskPutQuery, [completed, task_id])
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR:', err);
      res.sendStatus(500);
    });
});
