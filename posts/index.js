const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
const port = process.env.PORT || 4000;
// 
const posts = {};

app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(post[id]);
});

app.listen(port, () => {
    console.log(`MS posts listening on port ${port}`);
});
