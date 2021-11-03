import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../services/api";
import { Box, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";
import Conversation from "./Conversation";
const useStyles = makeStyles({
  component: {
    height: 40,
    padding: "13px 0",
    cursor: "pointer",
  },
  profilePic: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: "50%",
    padding: "0 14px",
  },
});

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const classes = useStyles();

  // for search users
  useEffect(() => {
    (async () => {
      const users = await getUsers(account.googleId);
      const filterUsers = users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterUsers);
    })();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users)
    });
  }, [account]);
  return (
    <>
      <Box className={classes.component}>
        {users?.map(
          (user, index) =>
            user.googleId !== account.googleId && (
              <>
                <Conversation user={user} />
                {/* {users.length !== index + 1 && (
                    <Divider className={classes.divider} />
                  )} */}
              </>
            )
        )}
      </Box>
    </>
  );
};

export default Conversations;
