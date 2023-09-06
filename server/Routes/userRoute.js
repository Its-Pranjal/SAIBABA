import express from 'express';
import userModel from '../Models/UserModel.js';

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const user = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Something went wrong while registering the user', error: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email, password });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Something went wrong while logging in', error: error.message });
    }
});

export default router;
