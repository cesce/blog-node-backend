const express = require('express');
const { randomBytes } = require('crypto');

const app = express();
const PORT = process.env.PORT | 4001;

const commentsByPostId = {};

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/posts/:id/comments', (req, res) => {
    res.json(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    // We store the comments for a post ID if exists or an empty array if not
    const comments = commentsByPostId[req.params.id] || [];
    
    comments.push({id: commentId, content});
    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(PORT, () => {
    console.log(`MS comments listening on port ${PORT}`);
});
