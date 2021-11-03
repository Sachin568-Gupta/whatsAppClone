import { useState, useContext } from "react";
import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import InfoDrawer from "../drawer/InfoDrawer";

const useStyle = makeStyles({
  menuItem: {
    fontSize: 14,
    padding: "15px 60px 5px 24px",
    color: "#4A4A4A",
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": {
      padding: "0px!important",
    },
  },
});

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const { setAccount } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyle();

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onLogoutSuccess = (event) => {
    setAccount(null);
    console.clear();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <MoreVert onClick={handleOpen} />
      <Menu
        elevation={0}
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            handleClose();
            toggleDrawer();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={onLogoutSuccess}
            buttonText="Logout"
            className={classes.logout}
          />
        </MenuItem>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
      </Menu>
    </>
  );
};

export default HeaderMenu;
