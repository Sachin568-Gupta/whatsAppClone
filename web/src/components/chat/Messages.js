import { useState, useEffect, useContext, useRef } from "react";
import { Box, makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import { AccountContext } from "../../context/AccountProvider";
import { newMessages, getMessages } from "../../services/api";
import Message from "./Message";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    // height: 'calc(100% - 114px)',
    backgroundSize: "50%",
  },
  footer: {
    height: "55px",
    background: "#ededed",
    // position: 'absolute',
    width: "100%",
    // bottom: 0
  },
  component: {
    height: "79vh",
    overflowY: "scroll",
  },
  container: {
    padding: "1px 80px",
  },
});

const Messages = (props) => {
  const classes = useStyles();
  const { person, conversation } = props;
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState();
  const { account, socket, setNewMessageFlag, newMessageFlag } =
    useContext(AccountContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  //for getting incoming message
  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessagesDetails = async () => {
      const data = await getMessages(conversation?._id);
      setMessages(data);
    };
    getMessagesDetails();
  }, [conversation?._id, person._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  // get receiver id from conversation member array
  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (!value) return;
    if (code === 13) {
      const message = {
        senderId: account.googleId,
        conversationId: conversation?._id,
        text: value,
      };

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: value,
      });
      await newMessages(message);
      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.component}>
        {messages &&
          messages.map((message) => (
            <Box className={classes.container}>
              <Message message={message} />
            </Box>
          ))}
      </Box>
      <Footer value={value} setValue={setValue} sendText={sendText} />
    </Box>
  );
};

export default Messages;
