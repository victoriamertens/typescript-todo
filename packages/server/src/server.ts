import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/test', (req, res) => {
  res.send('Server Connected');
});

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
