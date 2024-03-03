
const User = require('../models/user.model');

async function signUp(req, res) {
  try {
    const { username, email } = req.body;

  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const newUser = new User({
      username,
      email,
      password, 
    });

   
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function login(req, res) {
    try {
        const { username, email } = req.body;

        // Check if a user with the provided username or email already exists
        const existingUserByUsername = await User.findOne({ username });
        const existingUserByEmail = await User.findOne({ email });

        if (existingUserByUsername || existingUserByEmail) {
            return res.status(200).json({ message: 'User with this username or email already exists' });
        }

        // Send a success response if no user with the provided username or email exists
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Invalid login' });
    }
}

async function logout(req, res) {
    try {
      const { userId } = req.body;
  

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.loggedIn = false;
      await user.save()
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
module.exports = { login,signUp,logout};



