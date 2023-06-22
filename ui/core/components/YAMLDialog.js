import { Fragment } from "react"
import { Fullscreen, FullscreenExit } from "@mui/icons-material"
import { Typography, Tooltip, IconButton, Dialog, Divider, DialogContent, DialogActions } from "@mui/material"
import Editor from "./Editor"

const MesheryDialogTitle = ({
    children,
    toggleFullScreen,
    fullScreen
}) => {
    return (
        <Fragment>
            <Typography variant="h6">{children}</Typography>
            <Tooltip title={fullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'} arrow placement="bottom">
                <IconButton onClick={toggleFullScreen} />
                {fullScreen ? <FullscreenExit /> : <Fullscreen />}
            </Tooltip>
        </Fragment>
    )
}

const MesheryDialogActions = ({ updateHandler, deleteHandler }) => {
    return (
        <DialogActions>
            <Tooltip title="Update Pattern">
                <IconButton aria-label="Update" color="primary" onClick={updateHandler}>
                    <SaveIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete Filter">
                <IconButton aria-label="Delete" color="primary" onClick={deleteHandler}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </DialogActions>
    );
};

const YAMLDialog = ({
    fullScreen,
    name,
    toggleFullScreen,
    config_file,
    updateHandler,
    deleteHandler
}) => {
    return (
        <Dialog>
            <MesheryDialogTitle toggleFullScreen={toggleFullScreen} fullScreen={fullScreen}>
                {name}
            </MesheryDialogTitle>
            <Divider variant="fullWidth" light />
            <DialogContent>
                <Editor config_file={config_file} updateHandler={updateHandler} />
            </DialogContent>
            <Divider variant="fullWidth" light />
            <MesheryDialogActions updateHandler={updateHandler} deleteHandler={deleteHandler} />
        </Dialog>
    )
}

export default YAMLDialog