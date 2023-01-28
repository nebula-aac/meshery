import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState } from "react";
import navLinks from "../"

export default function Navigator() {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ flex: 1 }}>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Divider />
                <List>
                    {navLinks.map((item, index)) => (

                    )}
                </List>
            </Drawer>
        </Box>
    )
}