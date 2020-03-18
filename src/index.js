require('dotenv').config();
const express = require('express');
const profileRoute = require('./profile-route');

const app = express();
app.use(express.json());
app.use((res, req, next) => {
  console.log(`${req.method} ${req.path} ${new Date().toLocaleString()}`);
  next();
});

app.use('/profiles', profileRoute);


app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listening on http://${process.env.HOST}:${process.env.PORT}`);
});
