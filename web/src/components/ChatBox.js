import { useContext } from "react";
import {
  Box,
  Dialog,
  List,
  ListItem,
  Typography,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import Menu from "./menu/Menu";
import Chat from "../components/chat/Chat";
import { UserContext } from "../context/UserProvider";
import EmptyChat from "./chat/EmptyChat";

const style = {
  dialogPaper: {
    height: "97%",
    width: "91%",
    boxShadow: "none",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: "0px",
  },
};

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    minWidth: 380,
  },
  rightComponent: {
    width: "70%",
    minWidth: 300,
    height: "100%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
  },
});

const ChatBox = ({ classes }) => {
  const classname = useStyles();
  const { person } = useContext(UserContext);
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu />
        </Box>
        <Box className={classname.rightComponent}>
          {Object.keys(person).length ? <Chat /> : <EmptyChat />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
