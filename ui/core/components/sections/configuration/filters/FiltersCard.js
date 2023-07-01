import { Fragment, useEffect, useState } from "react"
import { Typography, Stack, Tooltip, IconButton, styled, Box, Divider, CardActions } from "@mui/material"
import { Fullscreen, FullscreenExit } from "@mui/icons-material"
import FlipCard from "@/core/components/FlipCard"
import Moment from "react-moment"
import { useDispatch, useSelector } from "react-redux"
import { Editor } from "@/core/components/Editor"
import { VISIBILITY } from "@/core/utils/constants"
import YAMLDialog from "@/core/components/YAMLDialog"
import { updateGridProps } from "@/core/features/grid/gridSlice"
import { TooltipButton } from "@/core/components/TooltipButton"

const INITIAL_GRID_SIZE = { xl: 4, md: 6, xs: 12 }
const FULL_GRID_SIZE = { xl: 12, md: 12, xs: 12 }

const MesheryFrontContentWrapper = styled("div")({
    display: "flex",
    justifyContent: "space-between"
})

const MesheryImg = styled("img")(({ theme }) => ({
    marginRight: "0.5rem",
    // filter: theme.palette.secondary.img
}))

const MesheryTypography = styled(Typography)((({ theme }) => ({
    // color: theme.palette.primary.main,
    variant: "caption",
    fontStyle: "italic"
})))

const MesheryCardActions = styled(CardActions)({
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: "center"
})

const FrontContent = ({
    name,
    visibility,
    updated_at,
    handleUndeploy,
    handleDeploy,
    handleClone,
    genericClickHandler
}) => {
    return (
        <Fragment>
            <MesheryFrontContentWrapper>
                <Typography variant="h6" component={"div"}>
                    {name}
                </Typography>
                <MesheryImg src={`/static/img/${visibility}.svg`} />
            </MesheryFrontContentWrapper>
            <MesheryLastRanText>
                <Box component={"div"}>
                    {updated_at ? (
                        <MesheryTypography>
                            Modified On: <Moment format="LLL">{updated_at}</Moment>
                        </MesheryTypography>
                    ) : null}
                </Box>
            </MesheryLastRanText>
            <MesheryCardActions>
                <Stack
                    display={"grid"}
                    gridTemplateColumns={"repeat(5,1fr)"}
                    marginTop={"50px"}
                    height={"100%"}
                    width={"100%"}
                    gap={".5rem"}
                >
                    <TooltipButton
                        title={"undeploy"}
                        variant={"contained"}
                        onClick={(ev) => genericClickHandler(ev, handleUndeploy)}
                    >
                        Undeploy
                    </TooltipButton>
                    <TooltipButton
                        title={"deploy"}
                        variant={"contained"}
                        color="primary"
                        onClick={(ev) => genericClickHandler(ev, handleDeploy)}
                    >
                        Deploy
                    </TooltipButton>
                </Stack>
                {visibility === VISIBILITY.PUBLISHED ?
                    <TooltipButton title="clone"
                        variant={"contained"}
                        color="primary"
                        onClick={(ev) => genericClickHandler(ev, handleClone)}>
                        Clone
                    </TooltipButton> : null
                }
            </MesheryCardActions>
        </Fragment>
    )
}

const MesheryBackContentWrapper = styled(Stack)({
    marginBottom: "0.25rem",
    minHeight: "6rem",
    position: "relative",
})

const MesheryYamlDialogTitle = styled(Stack)({
    display: "flex",
    alignItems: "center"
})

const MesheryYamlDialogTitleText = styled(Typography)({
    flexGrow: 1
})

const MesheryLastRanText = styled("div")({
    marginRight: "0.5rem"
})

const BackContent = ({
    name,
    description = {},
    genericClickHandler = () => { },
    updated_at,
    created_at,
    filter_file,
    fullScreen,
    setFullScreen,
    showCode,
    setYaml,
    visibility
}) => {
    const catalogContentKeys = Object.keys(description)
    const catalogContentValues = Object.values(description)

    const toggleFullScreen = () => {
        setFullScreen(!fullScreen);
    };

    return (
        <Fragment>
            <MesheryBackContentWrapper spacing={1} alignItems={"center"}>
                <MesheryYamlDialogTitle>
                    <MesheryYamlDialogTitleText variant="h6">
                        {name}
                    </MesheryYamlDialogTitleText>
                    <IconButton
                        onClick={(ev) =>
                            genericClickHandler(ev, () => {
                                toggleFullScreen();
                            })
                        }
                    >
                        {fullScreen ? <FullscreenExit /> : <Fullscreen />}
                    </IconButton>
                </MesheryYamlDialogTitle>
                <Divider variant="fullWidth" light />

                {catalogContentKeys.length === 0 ? (
                    <Editor config_file={filter_file} />
                ) : (
                    catalogContentKeys.map((title, index) => (
                        <Stack key={title} spacing={1}>
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                {title}
                            </Typography>
                            <Typography variant="body2">
                                {catalogContentValues[index]}
                            </Typography>
                        </Stack>
                    ))
                )}

                <Stack direction="row" justifyContent="flex-end" alignItems="center">
                    <MesheryLastRanText>
                        {created_at && (
                            <Typography
                                color="primary"
                                variant="caption"
                                sx={{ fontStyle: "italic" }}
                            >
                                Created at: <Moment format="LLL">{created_at}</Moment>
                            </Typography>
                        )}
                    </MesheryLastRanText>
                    {visibility === VISIBILITY.PRIVATE && (
                        <div className={classes.deleteButton}>
                            <Tooltip title="Delete" arrow interactive placement="bottom">
                                <IconButton onClick={deleteHandler}>
                                    <DeleteIcon color="primary" />
                                </IconButton>
                            </Tooltip>
                        </div>
                    )}
                </Stack>
            </MesheryBackContentWrapper>
        </Fragment>
    )
}

function FiltersCard({
    created_at,
    filter_file,
    updated_at,
    description,
    fullScreen,
    name = "Filters",
    visibility
}) {
    const dispatch = useDispatch()
    const gridProps = useSelector((state) => state.grid.gridProps)

    const [flipCard, setFlipCard] = useState({
        showCode: false
    })

    const toggleFullScreen = () => {
        setFlipCard({
            showCode: flipCard.showCode
        });
    };

    useEffect(() => {
        if (fullScreen) {
            toggleFullScreen();
        }
    }, [fullScreen])

    function genericClickHandler(ev, fn) {
        ev.stopPropagation()
        fn()
    }

    const handleRequestFullSize = () => {
        dispatch(updateGridProps({ ...gridProps, FULL_GRID_SIZE }))
    }

    const handleRequestSizeRestore = () => {
        dispatch(updateGridProps({ ...gridProps, INITIAL_GRID_SIZE }))
    }

    return (
        <Fragment>
            {flipCard.fullScreen && (
                <YAMLDialog
                    fullScreen={fullScreen}
                    name={name}
                    //toggleFullScreen={toggleFullScreen}
                    config_file={filter_file}
                    deleteHandler={deleteHandler}
                />
            )}
            <FlipCard
                duration={300}
                onClick={() => {
                    setFlipCard({ showCode: !flipCard.showCode })
                    // handleRequestSizeRestore()
                    // toggleFullScreen()
                    // handleRequestFullSize()
                }}
                onShow={() =>
                    setFlipCard({
                        ...flipCard,
                        showCode: true,
                    })}
                frontContent={
                    <FrontContent
                        name={name}
                        genericClickHandler={genericClickHandler}
                    >

                    </FrontContent>}
                backContent={
                    <BackContent
                        name={name}
                        description={description}
                        updated_at={updated_at}
                        created_at={created_at}
                        filter_file={filter_file}
                        fullScreen={flipCard.fullScreen}
                        toggleFullScreen={toggleFullScreen}
                        visibility={visibility}
                    />}
            >
            </FlipCard>
        </Fragment>
    )
}

export default FiltersCard