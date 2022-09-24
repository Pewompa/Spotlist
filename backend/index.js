const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./config/db');
const userRouter = require('./router/userRouter');
const songRouter = require('./router/songRouter');
const cors = require('cors');
connectDB();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(songRouter);

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
