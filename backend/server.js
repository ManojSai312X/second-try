import cors from 'cors';
import express from 'express';
import { connectToDB } from "./db.js";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const check = await db.collection("ast").findOne({ Email: req.body.Email });
    if (check) {
      return res.json({ message: "Email already exists" });
    }
    await db.collection("ast").insertOne({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      password: req.body.password
    });
    res.json({ message: "Signup successful" });
  } catch (error) {
    console.error('Error during signup:', error); // Log error details
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post('/signin', async (req, res) => {
  try {
    console.log('Received data:', req.body); // Log received data for debugging
    const user = await db.collection("ast").findOne({ Email: req.body.Email });
    if (!user) {
      console.log('User not found');
      return res.json({ message: "User not found" });
    }
    console.log('User found:', user); // Log user details
    if (req.body.password === user.password) {
      console.log('Password correct');
      res.json({ message: "Login successful", values: user });
    } else {
      console.log('Incorrect password');
      res.json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error('Error during signin:', error); // Log error details
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(9001, async () => {
  console.log("Server is running on port 9001");
  await connectToDB();
});
