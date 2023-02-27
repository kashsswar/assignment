const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/addName', (req, res) => {
  const { name } = req.body;
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="video-wrapper">
          <video controls>
            <source src="https://drive.google.com/uc?export=download&id=12f1fH1qleeYIiY1wuowh_fEbxqOW62HM" type="video/mp4">
          </video>
          <div class="overlay">
            <div class="name">${name}</div>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
