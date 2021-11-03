import { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#ededed",
    padding: "10px 16px",
    height: "35px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#51585c",
    },
    "& :first-child": {
      fontSize: "20px",
      marginRight: "8px",
      marginTop: "3px",
    },
  },
});
const Header = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          alt="profile-pic"
          className={classes.avatar}
          onClick={() => toggleDrawer()}
        />
        <Box className={classes.icons}>
          <Chat />
          <HeaderMenu />
        </Box>
      </Box>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
    </>
  );
};

export default Header;
