import { Fragment } from "react";
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Header from "./header/appNavBarHeader/Header";
import Navigator from "./sidebar/sideMenu/Navigator";

export default function MesheryAppWrapper(props) {
    return (
        <Fragment>
            <Header />
            <Navigator />
            <Main>
                <Toolbar />
                {props.children}
            </Main>
        </Fragment>
    )
}


function Main(props) {
	return (
		<Box component={'main'} {...props}>
			{props.children}
		</Box>
	);
}
