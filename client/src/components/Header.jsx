import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LoginWithGoogleBtn from "./LoginWithGoogleBtn";
import LeftDrawer from "./mobile/LeftDrawer";
import { MonetizationOn } from "@mui/icons-material";

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  const renderContent = () => {
    switch (props.auth) {
      case null:
        return (
          <Typography variant="span" color="primary">
            Loading..."
          </Typography>
        );
      case false:
        return <LoginWithGoogleBtn />;
      default:
        return (
          <>
            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              color="secondary"
            >
              Add Credit
            </Button>
            <Chip
              label={` You have ${props.auth.credit} credit ! `}
              color="secondary"
              variant="outlined"
              icon={<MonetizationOn />}
            />
            <Button
              component="a"
              href="/auth/logout"
              variant="contained"
              color="error"
            >
              Logout
            </Button>
          </>
        );
    }
  };

  return (
    <Box flex="1" mb={7}>
      <CssBaseline />
      <LeftDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer()}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
           { props.auth && <MenuIcon />}
          </IconButton>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, textDecoration: "none", color: "secondary.main" }}
          >
            EMAILY
          </Typography>
          <Stack
            gap={3}
            sx={{ display: { xs: "none", sm: "flex" } }}
            direction="row"
            alignContent="center"
          >
            {renderContent()}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
