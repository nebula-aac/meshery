//@ts-check
import React, { useState } from "react";
import Moment from "react-moment";
import useStyles from "../MesheryPatterns/Cards.styles";
import FlipCard from "../FlipCard";
import UndeployIcon from "../../public/static/img/UndeployIcon";
import TooltipButton from '../../utils/TooltipButton.js'

// mui v5
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography'
import Divider from "@mui/material/Divider"
import IconButton from '@mui/material/IconButton'
import Tooltip from "@mui/material/Tooltip"

// mui v5 icons
import DoneAllIcon from "@mui/icons-material/DoneAll"
import DeleteIcon from "@mui/icons-material/Delete"
import Fullscreen from '@mui/icons-material/Fullscreen';
import FullscreenExit from '@mui/icons-material/FullscreenExit';

import dynamic from 'next/dynamic';
const YAMLDialog = dynamic(() => import('../YamlDialogLayout'),)

const INITIAL_GRID_SIZE = { xl : 4, md : 6, xs : 12 };

function FiltersCard({
  name,
  updated_at,
  created_at,
  filter_file,
  handleDeploy,
  handleUndeploy,
  handleClone,
  deleteHandler,
  setYaml,
  description={},
  visibility
}) {

  function genericClickHandler(ev, fn) {
    ev.stopPropagation();
    fn();
  }
  const [gridProps, setGridProps] = useState(INITIAL_GRID_SIZE);
  const [fullScreen, setFullScreen] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  const catalogContentKeys = Object.keys(description);
  const catalogContentValues = Object.values(description);
  const classes=useStyles()

  return (
    <>
      {fullScreen &&
        <YAMLDialog
          fullScreen={fullScreen}
          name={name}
          toggleFullScreen={toggleFullScreen}
          config_file={filter_file}
          setYaml={setYaml}
          deleteHandler={deleteHandler}
        />
      }
      <FlipCard

        onClick={() => {
          console.log(gridProps)
          setGridProps(INITIAL_GRID_SIZE)
        }}
        duration={600}
        onShow={() => setTimeout(() => setShowCode(currentCodeVisibilty => !currentCodeVisibilty),500)}
      >
        {/* FRONT PART */}
        <>
          <div>
            <div style={{ display : "flex", justifyContent : "space-between" }}>
              <Typography variant="h6" component="div">
                {name}
              </Typography>
              <img  className={classes.img} src={`/static/img/${visibility}.svg`} />
            </div>
            <div className={classes.lastRunText} >
              <div>
                {updated_at
                  ? (
                    <Typography color="primary" variant="caption" style={{ fontStyle : "italic" }}>
                  Modified On: <Moment format="LLL">{updated_at}</Moment>
                    </Typography>
                  )
                  : null}
              </div>
            </div>
          </div>
          <div className={classes.bottomPart} >

            <div className={classes.cardButtons} >
              <TooltipButton
                title="undeploy"
                variant="contained"
                className={classes.undeployButton}
                onClick={(ev) =>
                  genericClickHandler(ev, handleUndeploy)
                }
              >
                <UndeployIcon fill="#ffffff" className={classes.iconPatt} />
                Undeploy
              </TooltipButton>
              <TooltipButton
                title="deploy"
                variant="contained"
                color="primary"
                onClick={(ev) =>
                  genericClickHandler(ev, handleDeploy)
                }
                className={classes.testsButton}
              >
                <DoneAllIcon className={classes.iconPatt}/>
              Deploy
              </TooltipButton>
              {visibility === "public" ? <TooltipButton
                title="Clone"
                variant="contained"
                color="primary"
                onClick={(ev) =>
                  genericClickHandler(ev, handleClone)
                }>
                <img src="/static/img/clone-white.svg" className={classes.clonePatt} />
                  Clone
              </TooltipButton> : null }
            </div>
          </div>
        </>

        {/* BACK PART */}
        <>
          <Grid className={classes.backGrid}
            container
            spacing={1}
            alignContent="space-between"
            alignItems="center"
          >
            <Grid item xs={8} className={classes.yamlDialogTitle}>
              <Typography variant="h6" className={classes.yamlDialogTitleText}>
                {name}
              </Typography>
              <Tooltip
                title="Enter Fullscreen"
                arrow
                placement="top"
              >
                <IconButton
                  onClick={(ev) =>
                    genericClickHandler(ev, () => {
                      {
                        toggleFullScreen()
                      }
                    })
                  }
                  className={classes.maximizeButton}
                >
                  {fullScreen ? <FullscreenExit /> : <Fullscreen />}
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={12}
              onClick={(ev) =>
                genericClickHandler(ev, () => {})
              }>

              <Divider variant="fullWidth" light />

              { catalogContentKeys.length === 0 ?
                <YAMLDialog
                  value={showCode && filter_file}
                  className={fullScreen ? classes.fullScreenCodeMirror : ""}
                />
                :
                catalogContentKeys.map((title, index) => (
                  <>
                    <Typography variant="h6" className={classes.yamlDialogTitleText}>
                      {title}
                    </Typography>
                    <Typography variant="body2">
                      {catalogContentValues[index]}
                    </Typography>
                  </>
                ))
              }
            </Grid>

            <Grid item xs={8}>
              <div className={classes.lastRunText} >
                <div>
                  {created_at
                    ? (
                      <Typography color="primary" variant="caption" style={{ fontStyle : "italic" }}>
                  Created at: <Moment format="LLL">{created_at}</Moment>
                      </Typography>
                    )
                    : null}
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              { visibility === "private" ? <div className={classes.deleteButton} >
                <Tooltip
                  title="Delete" arrow placement="bottom"
                >
                  <IconButton onClick={(ev) =>
                    genericClickHandler(ev,deleteHandler)
                  }>
                    <DeleteIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </div> : null}
            </Grid>
          </Grid>
        </>
      </FlipCard >
    </>
  );
}

// @ts-ignore
export default FiltersCard;
