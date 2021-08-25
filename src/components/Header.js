import React,{useState,useEffect} from "react";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon  from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  colorText: {
    color: "#5AFF3D",
  },
  icon: {
    color: "#5AFF3D",
    fontSize: "2rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: "3.5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize:'3.5rem'
  },
}));
const Header = () => {
  const classes = useStyles();
  const [checked,setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  },[])
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked? {timeout:1000} : {})} collapseHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
