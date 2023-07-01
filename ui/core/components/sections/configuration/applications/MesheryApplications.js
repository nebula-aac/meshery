import FlipCard from "@/core/components/FlipCard"
import { TooltipButton } from "@/core/components/TooltipButton"
import { updateGridProps } from "@/core/features/grid/gridSlice"
import { Card, CardActions, CardContent, Stack, Tooltip, Typography, styled } from "@mui/material"
import { Children, Fragment, cloneElement, isValidElement, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const MesheryCardActions = styled(CardActions)({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
})

export default function MesheryApplications() {
    return (
        <Applications />
    )
}

const INITIAL_GRID_SIZE = { xl: 4, md: 6, xs: 12 }
const FULL_GRID_SIZE = { xl: 12, md: 12, xs: 12 }

function GridLayout({ children }) {
    const gridProps = useSelector((state) => state.grid.gridProps)
    const dispatch = useDispatch()

    const requestFullSize = () => {
        dispatch(updateGridProps({ FULL_GRID_SIZE }))
    }

    const requestSizeRestore = () => {
        dispatch(updateGridProps({ INITIAL_GRID_SIZE }))
    }

    return (
        <Stack spacing={3} sx={{ padding: "1rem" }}>
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child, {
                        gridProps,
                        requestFullSize,
                        requestSizeRestore
                    })
                }
                return child
            })}
        </Stack>
    )
}

const FrontContent = () => {
    return (
        <Fragment>

        </Fragment>
    )
}

const BackContent = () => {
    return (
        <Fragment>

        </Fragment>
    )
}

function MesheryCardItem({
    item,
    name,
    requestFullSize,
    requestSizeRestore
}) {
    const [yaml, setYaml] = useState(item)
    const [isFullscreen, setIsFullScreen] = useState(false)

    const toggleFullscreen = () => {
        if (isFullscreen) {
            requestSizeRestore()
        } else {
            requestFullSize()
        }
        setIsFullScreen(!isFullscreen)
    }

    return (
        <CardContent>
            <Typography variant="h6" component={"div"}>
                {name}
            </Typography>
        </CardContent>
    )
}

/*
function MesheryCard() {
    return (
        <Card
            sx={{ height: "100vh" }}
        >
            <MesheryCardItem />
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
                    >
                        Undeploy
                    </TooltipButton>
                    <TooltipButton
                        title={"deploy"}
                        variant={"contained"}
                    >
                        Deploy
                    </TooltipButton>
                </Stack>
            </MesheryCardActions>
        </Card>
    )
}
*/

/*
function MesheryCard({
    frontContent,
    backContent
}) {
    return (
        <Fragment>
            <FlipCard
                duration={300}
                onClick={() => {

                }}
                frontContent={
                    <FrontContent />
                }
                backContent={
                    <BackContent />
                }
            >
            </FlipCard>
        </Fragment>
    )
}

*/

function Applications({
    gridProps,
    name = "Applications",
}) {
    return (
        <GridLayout {...gridProps}>
            <MesheryCard
                name={name}
            />
        </GridLayout>
    )
}