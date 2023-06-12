import { Settings } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Header(props) {
  const title = "Dashboard"
  const isBeta = ""

  return (
    <AppBar
      elevation={2}
      {...props}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
          {title}{isBeta ? <sup>BETA</sup> : ""}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box data-test="settings-button" sx={{ display: { xs: "none", md: "flex" } }}>
          <Link href="/settings">
            <IconButton>
              <Settings />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
      {props.children}
    </AppBar>
  );
}