import { Drawer } from "@mui/material";

export default function Navigator(props) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      {...props}
    >
      {props.children}
    </Drawer>
  );
}