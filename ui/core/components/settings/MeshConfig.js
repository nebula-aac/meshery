import { Box } from "@mui/material"
import { Fragment } from "react"
import MesherySettingsEnvButton from "./SettingsEnvButton"

function SettingsEnvLayout(children) {
    return (
        <Fragment>
            <Box>
                <MesherySettingsEnvButton />
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