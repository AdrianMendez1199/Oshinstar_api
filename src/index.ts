import express from 'express';
import 'dotenv/config';

const app = express();

app.listen(process.env.APP_PORT, () => {
  console.info(`Server is running on http://localhost:${process.env.APP_PORT}`)
});