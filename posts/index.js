const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
//
const posts = {};

app.use(
  express.urlencoded({
    extended: true,
  })
); //Parse URL-encoded bodies
app.use(express.json());
app.use(cors());

app.get('/posts', (req, res) => {
  /*
    {
        "a80a08ea": {
            "id": "a80a08ea",
            "title": "Post01"
        }
    }
    */
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  // req.body => { title: 'Post01' }
  // title =>  Post01
  /*
    {
        "id": "a80a08ea",
        "title": "Post01"
    }
    */
  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
  console.log(`MS posts listening on port ${PORT}`);
});
