const { styled } = require("@mui/material")
const { animated } = require("react-spring")

export const MesheryCardContentWrapper = styled(animated.div)(({ flipped }) => ({
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: flipped ? 'scale(-1, 1)' : 'none',
}))

export const MesheryCardLayoutWrapper = styled(animated.div)({
    height: "100%",
    backgroundColor: "transparent",
    perspective: "500px"
})

export const MesheryCardLayout = ({ onClick = () => { }, children }) => {
    return (
        <MesheryCardLayoutWrapper onClick={onClick}>
            {children}
        </MesheryCardLayoutWrapper>
    )
}