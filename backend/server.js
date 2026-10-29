const express = require('express');
const app = express();                                                                                                                                                                           
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
res.send('<h1>สวัสดีครับ</h1>');
});

app.get("/snacklist", (req, res) => {
res.send("รายการขนม: ขนม 1, ขนม 2, ขนม 3");
});

let data = ['Thanapoom']

app.get("/api/data", (req, res) => {
console.log('this one was for data');
res.send(data);
});

app.post("/api/data", (req, res) => {
const newEntry = req.body;
res.sendStatus(201);
data.push(newEntry.name);
});

app.listen(PORT,() => {
    console.log(`PORT ${PORT}`);
});