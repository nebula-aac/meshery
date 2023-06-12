import { Box, ButtonGroup, Divider, Drawer, List, Toolbar } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft, faCaretDown,
  faExternalLinkAlt,
  faDigitalTachograph
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <Fragment>
      <List disablePadding>
        {["Dashboard", "Lifecycle", "Configuration", "Performance", "Conformance", "Extensions"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Fragment>
  )
}

function HelpIcons() {
  return (
    <Fragment>
      <ButtonGroup>
        <ListItem></ListItem>
      </ButtonGroup>
    </Fragment>
  )
}

function Version() {
  return (
    <Fragment>
      <ListItem></ListItem>
    </Fragment>
  )
}

function Chevron() {
  return (
    <Fragment>
      <Box>
        <Box>
          <FontAwesomeIcon
            icon={faAngleLeft}
            fixedWidth
            size="1.5x"
            style={{ margin: "0.75rem 0.2rem ", width: "0.8rem", verticalAlign: "middle" }}
            alt="Sidebar collapse toggle icon"
          />
        </Box>
      </Box>
    </Fragment>
  )
}

export default function Navigator(props) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      {...props}
    >
      <Toolbar />
      <Divider />
      <Menu />
      {props.children}
    </Drawer>
  );
}