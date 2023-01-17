import {
  Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Tooltip, Typography
} from "@material-ui/core";
import useStyles from "./MesheryPatterns/Cards.styles";
import FullscreenExit from "@material-ui/icons/FullscreenExit";
import DeleteIcon from "@material-ui/icons/Delete";
import Fullscreen from "@material-ui/icons/Fullscreen";
import Save from "@material-ui/icons/Save";
import dynamic from 'next/dynamic'

export const CodeMirror = dynamic(
  async () => {
    await import('codemirror/mode/yaml/yaml')
    await import('codemirror/mode/javascript/javascript')
    await import('codemirror/addon/lint/lint')
    await import('codemirror/addon/lint/yaml-lint')
    await import('codemirror/addon/lint/json-lint')
    await import('codemirror/addon/lint/lint.css')
    await import('codemirror/lib/codemirror')
    await import('codemirror/lib/codemirror.css')
    await import('codemirror/theme/material.css')
    await import('codemirror/mode/css/css')
    await import('@uiw/react-codemirror/esm/index')
    await import('@uiw/react-codemirror/lib/codemirror.css')
    return import('@uiw/react-codemirror')
  }, { ssr : false })

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
        {<CodeMirror
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
        />}
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

export default YAMLDialog