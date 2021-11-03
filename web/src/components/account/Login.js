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
import GoogleLogin from "react-google-login";
import { AccountContext } from "../../context/AccountProvider";
import { clientId } from "../../constants/data";
import { addUser } from "../../services/api";
const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    boxShadow: "none",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    padding: "56px 0px 56px 56px",
  },
  qrCode: {
    height: "225px",
    width: "225px",
    padding: "50px 20px",
  },
  title: {
    fontWeight: 300,
    color: "#525252",
    marginBottom: "25px",
    fontSize: "26px",
    fontFamily: "Segoe UT,Helvetica Neue,Arial,Ubuntu,sans-serif",
  },
  list: {
    "& > *": {
      padding: "0px",
      marginTop: "15px",
      fontSize: "18px",
      lineHeight: "20px",
      color: "#4a4a4a",
    },
  },
});

const Login = ({ classes }) => {
  const classname = useStyles();
  const { setAccount } = useContext(AccountContext);
  const qrcode =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/WhatsApp_click-to-chat_QR_code.png/902px-WhatsApp_click-to-chat_QR_code.png";

  const handleLogin = async (res) => {
    try {
      setAccount(res.profileObj);
      await addUser(res.profileObj);
    } catch (error) {
      console.error("error while login because of", error);
    }
  };
  const handleError = () => {
    //
  };
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Typography className={classname.title}>
            To use WhatsApp on your computer:
          </Typography>
          <List className={classname.list}>
            <ListItem>1. Open WhatsApp on your Phone</ListItem>
            <ListItem>
              2. Tap Menus and Settings and select Linked devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </List>
        </Box>
        <Box style={{ position: "relative" }}>
          <img src={qrcode} alt="qr" className={classname.qrCode} />
          <Box style={{ position: "absolute", left: "40%", top: "45%" }}>
            <GoogleLogin
              clientId={clientId}
              buttonText=""
              isSignedIn={true}
              onSuccess={handleLogin}
              onFailure={handleError}
              cookiePolicy={"single_host_origin"}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
