import { Box } from "@mui/material"
import { Fragment } from "react"
import MesherySettingsEnvButton from "./SettingsEnvButton"

function SettingsEnvLayout(props) {
    return (
        <Fragment>
            <Box>
                <MesherySettingsEnvButton />
                {props.children}
            </Box>
        </Fragment>
    )
}
export default function MeshConfig() {
    return (
        <SettingsEnvLayout>
            <Box component={'div'} sx={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
                {/* <DataTable /> */}
            </Box>
        </SettingsEnvLayout>
    )
}