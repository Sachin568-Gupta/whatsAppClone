import { Box, makeStyles, Typography, Divider } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  component: {
    background: "#f8f9fa",
    padding: "50px 0",
    textAlign: "center",
    height: "100%",
  },
  container: {
    padding: "0 200px",
  },
  image: {
    width: 320,
  },
  title: {
    fontSize: 36,
    fontWeight: 300,
    color: "#525252",
    marginTop: 25,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.45)",
  },
  divider: {
    margin: "30px 0",
  },
}));

const EmptyChat = () => {
  const classes = useStyle();
  const url =
    "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={url} alt="dp" className={classes.image} />
        
        {/* <Divider className={classes.divider} /> */}
      </Box>
    </Box>
  );
};

export default EmptyChat;
