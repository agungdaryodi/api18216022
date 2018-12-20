import express from 'express';
import router from './routes/index.js';
import bodyParser from 'body-parser';
// Set up the express app
const app = express();
// get all repos
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});