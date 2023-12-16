import Box from "@mui/material/Box";
import { Link, useHistory } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { ListAlt, Logout, Paid } from "@mui/icons-material";

function LeftDrawer(props) {
  return (
    <Drawer
      anchor="left"
      open={props.drawerOpen}
      onClose={props.toggleDrawer()}
    >
      <Box
        mt={3}
        sx={{ width: 250 }}
        role="presentation"
        onClick={props.toggleDrawer()}
        onKeyDown={props.toggleDrawer()}
      >
        <Typography mb={5} textAlign="center" color="secondary" variant="h4">
          Emaily App
        </Typography>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton LinkComponent={Link} to="/checkout">
              <ListItemIcon>
                <Paid color="primary" />
              </ListItemIcon>
              <ListItemText primary="Add Credit" color="primary" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent={Link} to="/surveys">
              <ListItemIcon>
                <ListAlt color="primary" />
              </ListItemIcon>
              <ListItemText primary="Suveys List" color="primary" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/auth/logout">
              <ListItemIcon>
                <Logout color="error" />
              </ListItemIcon>
              <ListItemText primary="Logout" color="primary" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}

export default LeftDrawer;
