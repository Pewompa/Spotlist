const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./config/db');
// const router = require('./router/listRouter');
const cors = require('cors');
connectDB();

app.use(cors());
app.use(express.json());
// app.use(router);

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
