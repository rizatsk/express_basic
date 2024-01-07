const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/api/v1', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal!</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/api/v1/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/api/v1/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  userGoal = enteredGoal;
  res.redirect('/api/v1');
});

app.listen(8001);
