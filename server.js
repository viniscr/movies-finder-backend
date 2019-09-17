const express = require('express');
const cors = require('cors');
const routes = require('./src/routes')

const app = express ();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use(routes);

app.listen(process.env.PORT || 3001);