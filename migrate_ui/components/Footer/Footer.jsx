import React from "react"
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { FooterWrapper } from "./Footer.styles"
import styles from "./Footer.module.css"

export default function Footer() {
    const classes = styles
    
    const handleComClick = () => {
        if (typeof window !== "undefined") {
            const L = window.open("https://layer5.io", "_blank");
            L.focus();
        }
    };
    return (
        <FooterWrapper>
            <Typography variant="body2" align="center" color="textSecondary">
                <span onClick={handleComClick} className={classes.footerText}>
                    Built with
                    <FavoriteIcon className={classes.footericon} /> by the Layer5 Community
                </span>
            </Typography>
        </FooterWrapper>
    );
};