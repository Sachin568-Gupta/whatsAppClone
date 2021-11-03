import Messages from "../models/Messages.js";

export const addNewMessage = async (req, res) => {
  try {
    const newMessage = new Messages(req.body);
    await newMessage.save();
    res.status(200).json("message saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await Messages.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
