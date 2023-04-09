import express from 'express';

const app = express();

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
