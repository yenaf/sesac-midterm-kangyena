const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/index');
const { sequelize } = require('./models'); //db객체중에서 sequelize 꺼내옴

sequelize
    // force: true; 서버 실행때 마다 테이블을 재 생성
    // force: false; 서버 실행 시 테이블이 없으면 생성
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connection succeeded!')
            console.log(`Server is running! Port number is ${PORT} ...`);
        });
    })
    .catch((err) => {
        console.error(err);
    });