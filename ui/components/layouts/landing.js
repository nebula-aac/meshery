import { Box } from "@mui/material";

export default function LandingLayout(props) {
  return (
    <Box sx={{ display: "flex" }} {...props}>
      {props.children}
    </Box>
  );
}