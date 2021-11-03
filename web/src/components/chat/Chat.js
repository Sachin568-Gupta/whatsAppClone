import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { AccountContext } from "../../context/AccountProvider";
import { Box } from "@material-ui/core";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { getConversation } from "../../services/api";

const Chat = () => {
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversationDetails = async () => {
      let res = {};
      res = await getConversation({
        receiverId: person.googleId,
        senderId: account.googleId,
      });
      setConversation(res);
    };
    getConversationDetails();
  }, [person.googleId]);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default Chat;
