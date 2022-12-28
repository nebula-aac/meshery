// mui v5
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Divider from "@mui/material/Divider"
import IconButton from '@mui/material/IconButton'
import Tooltip from "@mui/material/Tooltip"

// mui v5 icons
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DeleteIcon from "@mui/icons-material/Delete"
import Save from "@mui/icons-material/Save"

//
import { useState } from "react";
import YamlDialog from "./YamlDialog";

function TooltipIcon({ children, onClick, title }) {
  return (
    <Tooltip title={title} placement="top">
      <IconButton onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  )
}

export default function CodeEditorLayout({ onClose, name, deleteHandler, updateHandler }) {
  const [fullScreen, setFullScreen] = useState(false)

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen)
  }

  return (
    <>
      <Dialog onClose={onClose} aria-labelledby="filter-dialog-title" open maxWidth="md" fullScreen={fullScreen} fullWidth={!fullScreen}>
        <DialogTitle id="filter-dialog-title" sx={{ display : "flex", alignItems : "center" }}>
          <Typography sx={{ flexGrow : 1 }}>{name}</Typography>
          <TooltipIcon title={fullScreen ? "Exit Fullscreen" : "Enter Fullscreen"} onClick={toggleFullScreen}>
            {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </TooltipIcon>
          <TooltipIcon title="Exit" onClick={onClose}>
            <CloseIcon />
          </TooltipIcon>
        </DialogTitle>
        <Divider variant="fullWidth" light />
        <DialogContent>
          <YamlDialog fullScreen={fullScreen} />
        </DialogContent>
        <DialogActions>
          <Tooltip title="Update Pattern">
            <IconButton
              aria-label="Update"
              color="primary"
              onClick={updateHandler}
            >
              <Save />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Filter">
            <IconButton
              aria-label="Delete"
              color="primary"
              onClick={deleteHandler}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </>

  )
}