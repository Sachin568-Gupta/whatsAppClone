import User from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    const userExists = await User.findOne({ googleId: req.body.googleId });
    if (userExists) {
      res.status(200).json("User already saved in DB");
      return;
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("user saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ googleId: { $ne: req.query.googleId } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
