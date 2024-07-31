const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/index');
const { sequelize } = require('./models'); //db객체중에서 sequelize 꺼내옴

