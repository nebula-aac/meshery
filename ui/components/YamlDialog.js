import { useEffect, useState } from 'react'

// codemirror
import { basicSetup, EditorView } from "codemirror"
import { StreamLanguage } from "@codemirror/language"
import { yaml } from "@codemirror/legacy-modes/mode/yaml"
import { linter, lintGutter } from "@codemirror/lint"
import { materialDark } from 'cm6-theme-material-dark'

// mui v5
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Divider from "@mui/material/Divider"
import IconButton from '@mui/material/IconButton'
import Tooltip from "@mui/material/Tooltip"
import Paper from '@mui/material/Paper'

// mui v5 icons
import DeleteIcon from "@mui/icons-material/Delete"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Save from "@mui/icons-material/Save"

/*
import {
  Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Tooltip, Typography
} from "@material-ui/core";
import useStyles from "./MesheryPatterns/Cards.styles";
import FullscreenExit from "@material-ui/icons/FullscreenExit";
import DeleteIcon from "@material-ui/icons/Delete";
import Fullscreen from "@material-ui/icons/Fullscreen";
import Save from "@material-ui/icons/Save";

const YAMLDialog = ({
  fullScreen,
  name,
  toggleFullScreen,
  config_file,
  setYaml,
  deleteHandler,
  updateHandler
}) => {
  const classes = useStyles()
  return (
    <Dialog aria-labelledby="filter-dialog-title" open maxWidth="md" fullScreen={fullScreen} fullWidth={!fullScreen}>
      <DialogTitle disableTypography id="filter-dialog-title" className={classes.yamlDialogTitle}>
        <Typography variant="h6" className={classes.yamlDialogTitleText}>
          {name}
        </Typography>
        <Tooltip
          title="Exit Fullscreen" arrow interactive placement="bottom"
        >
          <IconButton
            onClick={toggleFullScreen}>
            {fullScreen ? <FullscreenExit /> : <Fullscreen />}
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <Divider variant="fullWidth" light />
      <DialogContent>
        <CodeMirror
          value={config_file}
          className={fullScreen ? classes.fullScreenCodeMirror : ""}
          options={{
            theme : "material",
            lineNumbers : true,
            lineWrapping : true,
            gutters : ["CodeMirror-lint-markers"],
            // @ts-ignore
            lint : true,
            mode : "text/x-yaml",
          }}
          onChange={(_, data, val) => setYaml(val)}
        />
      </DialogContent>
      <Divider variant="fullWidth" light />
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
  )
}
*/

function TooltipIcon({ children, onClick, title }) {
  return (
    <Tooltip title={title} placement="top">
      <IconButton onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  )
}

function YAMLDialog({ props }) {
  const {
    name,
    updateHandler,
    deleteHandler
  } = props

  const [fullScreen, setFullScreen] = useState(false)

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen)
  }

  useEffect(() => {
    const jsyaml = require('js-yaml')

    const yamlLinter = linter(view => {
      let diagnostics = []

      try {
        jsyaml.load(view.state.doc)
      } catch (e) {
        var loc = e.mark;
        var from = loc ? loc.position : 0;
        var to = from;
        var severity = "error";
        diagnostics.push({ from : from, to : to, message : e.message, severity : severity });
      }
      return diagnostics
    })

    new EditorView({
      doc : "",
      extensions : [basicSetup, StreamLanguage.define(yaml), lintGutter(), yamlLinter, materialDark],
      parent : document.querySelector("#editor")
    })
  }, []);

  return (
    <Dialog aria-labelledby="filter-dialog-title" open maxWidth="md" fullScreen={fullScreen} fullWidth={!fullScreen}>
      <DialogTitle id="filter-dialog-title" sx={{ display : "flex", alignItems : "center" }}>
        <Typography sx={{ flexGrow : 1 }}>{name}</Typography>
        <TooltipIcon title="Exit Fullscreen" arrow interactive placement="bottom">
          <IconButton
            onClick={toggleFullScreen}>
            {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </TooltipIcon>
      </DialogTitle>
      <Divider variant="fullWidth" light />
      <DialogContent>
        <Paper id="editor" sx={{ height : "100%", minHeight : "300px" }} />
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
  )
}

export default YAMLDialog