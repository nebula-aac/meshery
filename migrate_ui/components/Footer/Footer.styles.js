import { styled } from "@mui/material";

export const FooterWrapper = styled('div')(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  padding: ${theme.spacing(2)};
  color: "#737373"
`,
);