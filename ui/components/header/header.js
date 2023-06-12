import { AppBar } from "@mui/material";

export default function Header(props) {
    return (
      <AppBar
        {...props}
      >
        {props.children}
      </AppBar>
    );
  }