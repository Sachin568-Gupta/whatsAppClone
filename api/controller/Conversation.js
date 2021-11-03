import Conversation from "../models/Conversation.js";

export const startConversation = async (req, res) => {
  try {
    let senderId = req.body.senderId;
    let receiverId = req.body.receiverId;
    if (senderId && receiverId) {
      const exists = Conversation.findOne({
        members: { $all: [senderId, receiverId] },
      });
      if (exists) {
        res.status(200).json("conversation already created");
        return;
      }
      const conversationRes = new Conversation({
        members: [senderId, receiverId],
      });
      await conversationRes.save();
      res.status(200).json("conversation created successfully");
    } else {
      res.status(500).json("senderId and receiverId are required");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getConversation = async (req, res) => {
  try {
    let senderId = req.body.senderId;
    let receiverId = req.body.receiverId;
    const conversationObj = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    res.status(200).json(conversationObj);
  } catch (error) {
    res.status(500).json(error);
  }
};
