import express from 'express';
import tasksRouter from './Router/TasksRouter';
import bodyParser from 'body-parser';

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/api/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
