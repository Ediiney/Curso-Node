const express = require('express');

const userModel = require('../src/models/user.models');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/views/users', async (req, res) => {
  const users = await userModel.find({});
  res.render('index', { users });
});

app.use((req, res, next) => {
  console.log(`Request method:`, req.method);
  console.log(`Content Type:`, req.headers["content-type"]);
  console.log(`Route not found:`, req.method, req.url);
  console.log(`Request body:`, req.body);
  console.log(`Request headers:`, req.headers);
  console.log(`Date: ${new Date()}`);
  next();
});

app.get('/home', (req, res) => {
    res.contentType('application/html');
  res.status(200).send("<h1>'Hello World!'</h1>");
});

app.get('/users', async (req, res) => {
 try {
    const users = await userModel.find({});
    res.status(200).json(users);
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/users', async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await userModel .findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});