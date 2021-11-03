import React, { useContext } from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./account/Login";
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./ChatBox";

const useStyles = makeStyles({
  component: {
    height: "100vh",
    background: "#DCDCDC",
  },
  header: {
    background: "#00bfa5",
    boxShadow: "none",
    height: 200,
  },
  loginHeader: {
    background: "#128C7E",
    boxShadow: "none",
    height: 115,
  },
});

const Messanger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <Box className={classes.component}>
      <AppBar className={account ? classes.loginHeader : classes.header}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatBox /> : <Login />}
    </Box>
  );
};

export default Messanger;
