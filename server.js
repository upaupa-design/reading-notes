const express = require("express");

const app = express();

const PORT = 3000;


// JSON形式のデータを受け取れるようにする
app.use(express.json());


// index.htmlなどをブラウザから見られるようにする
app.use(express.static("."));


// ブラウザから「/」にアクセスされたとき
app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");

});

// ブラウザから文章を受け取る
app.post("/api/explain", (req, res) => {

    const text = req.body.text;

    console.log("ブラウザから文章が届きました！");
    console.log(text);

    res.json({
        answer: "server.jsが文章を受け取りました！"
    });

});

// サーバーを起動する
app.listen(PORT, () => {

    console.log("やさしい読書のサーバーが起動しました！");
    console.log(`http://localhost:${PORT}`);

});