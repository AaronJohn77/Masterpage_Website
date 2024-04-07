const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./model/Users")
const bcrypt = require('bcrypt');

const app = express()
app.use(cors())

const mongoDB_url = "mongodb+srv://admin:admin123@clusterecommerce.hp9v9r2.mongodb.net/"; // Update this with your new MongoDB connection string

app.use(express.json())
mongoose.connect(mongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    UserModel.find({}) //to find the user in database
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email
      const user = await UserModel.findOne({ email });
  
      // If user doesn't exist, return error
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      // If password is invalid, return error
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Password is valid, return success
      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id //extract the parameters from request url
    UserModel.findById({ _id:id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({ _id:id }, {//find by id and update the data
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id:id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("server is running")
})
