import { CheckBox, Search } from '@mui/icons-material'
import { Box, Button, Chip, ClickAwayListener, IconButton, Paper, Slide, TextField, styled, useTheme } from '@mui/material'
import Link from 'next/link'
import { useSnackbar } from 'notistack'
import { Fragment, createRef, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteKubernetesConfig, loadActiveK8sContexts, updateK8SConfig } from '@/core/features/config/k8sConfigSlice'
import { pingKubernetes } from '@/core/features/progress/progressSlice'
import { setTransformProperty } from '@/core/features/transform/transformSlice'
import { STATUS } from '@/core/utils/constants'
import { getBrokerStatus, getMeshSyncStatus, getOperatorStatus } from '@/core/utils/contextStatusUtils'

const styles = {
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5
  },
  disabledWithOutOpacity: {
    pointerEvents: 'none'
  },
  cursorNotAllowed: {
    cursor: 'not-allowed'
  },
  cursorNotAllowedWithLowOpacity: {
    cursor: 'not-allowed',
    opacity: 0.5
  }
}

const CustomChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1)
}))

function K8sContextMenu ({
  contexts = {},
  searchContexts = () => { },
  show
}) {
  const theme = useTheme()
  const dispatch = useDispatch()
  const deleteCtxtRef = createRef()
  const containerRef = useRef(null)

  const [anchorEl, setAnchorEl] = useState()
  const [showFullContextMenu, setShowFullContextMenu] = useState()
  const transformProperty = useSelector(state => state.transform.transformProperty)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const styleSlider = {
    position: 'absolute',
    left: '-5rem',
    zIndex: '-1',
    bottom: showFullContextMenu ? '-55%' : '-110%',
    transform: showFullContextMenu ? `translateY(${transformProperty}%)` : 'translateY(0)'
  }

  const ctxStyle = {
    ...styles.disabled,
    marginRight: '0.5rem'
  }

  let open = Boolean(anchorEl)
  if (showFullContextMenu) {
    open = showFullContextMenu
  }

  useEffect(() => {
    dispatch(setTransformProperty(contexts.total_count))
  }, [contexts.total_count, dispatch])

  useEffect(() => {
    async function handleKubernetesClick (id) {
      dispatch(pingKubernetes({ id }))
    }

    async function handleKubernetesDelete (name, ctxID) {
      const responseOfDeleteK8sCtx = await deleteCtxtRef.current.show({
        title: `Delete ${name} context?`,
        subtitle: `Are you sure you want to delete ${name} cluster from Meshery?`,
        options: ['CONFIRM', 'CANCEL']
      })

      if (responseOfDeleteK8sCtx === 'CONFIRM') {
        try {
          dispatch(deleteKubernetesConfig({ id: ctxID }))

          const updatedConfig = dispatch(loadActiveK8sContexts())

          if (Array.isArray(updatedConfig)) {
            dispatch(updateK8SConfig({ k8sConfig: updatedConfig }))
          }
        } catch (error) {
          console.error('An error occurred while deleting Kubernetes config', error)
          // Handle error (e.g., display error message)
        }
      }
    }

    // Return any cleanup functions if needed
  }, [deleteCtxtRef, dispatch])

  return (
    <Fragment>
      <Box sx={show ? styles.cursorNotAllowed : {}}>
        <KubernetesIconButton
          setAnchorEl={setAnchorEl}
          setShowFullContextMenu={setShowFullContextMenu}
          aria-owns={open ? 'menu-list-grow' : undefined}
          sx={show ? ctxStyle : { marginRight: '0.5rem' }}
        >
          <CustomChip
            icon={<img src="/static/img/kubernetes.svg" sx={{ width: theme.spacing(2.5) }} style={{ width: 24, height: 24 }} />}
            label="0"
            variant="outlined"
          />
        </KubernetesIconButton>
      </Box>
      <Box
        ref={containerRef}>
        <Slide direction="up" style={styleSlider} in={open} container={containerRef.current} timeout={400} mountOnEnter unmountOnExit>
          <Box>
            <ClickAwayListener onClickAway={(e) => {
            }}>
              <Paper
                sx={(theme) => ({
                  backgroundColor: theme.palette.background.default,
                  marginTop: '-0.7rem',
                  borderRadius: '3px',
                  padding: '1rem',
                  zIndex: 1201,
                  boxShadow: '20px #979797',
                  transition: 'linear .2s',
                  transitionProperty: 'height'
                })}>
                <Box>
                  <TextField
                    id="search-ctx"
                    label="Search"
                    size="small"
                    variant="outlined"
                    onChange={ev => searchContexts(ev.target.value)}
                    sx={{ width: '100%', backgroundColor: 'rgba(102, 102, 102, 0.12)', margin: '1px 0px' }}
                    InputProps={{
                      endAdornment: (
                        <Search 
                          sx={(theme) => ({
                            width : theme.spacing(3.5)
                          })}
                        />
                      )
                    }}
                  />
                </Box>
                <Box>
                  {
                    contexts?.total_count
                      ? <Fragment>
                        <CheckBox />
                        <span style={{ fontWeight: 'bolder' }}>select all</span>
                      </Fragment>
                      : <Link href="/settings">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          sx={{ margin: '0.5rem 0.5rem', whiteSpace: 'nowrap' }}
                        >
                          Connect Clusters
                        </Button>
                      </Link>
                  }
                  {contexts?.contexts?.map((ctx, idx) => {
                    const meshStatus = getMeshSyncStatus(ctx.id)
                    const brokerStatus = getBrokerStatus(ctx.id)
                    const operStatus = getOperatorStatus(ctx.id)

                    function getStatus (status) {
                      if (status) {
                        return STATUS.ACTIVE
                      } else {
                        return STATUS.DISABLED
                      }
                    }
                  })}
                </Box>
              </Paper>
            </ClickAwayListener>
          </Box>
        </Slide>
      </Box>
    </Fragment>
  )
}

export default K8sContextMenu

const KubernetesIconButton = ({
  setAnchorEl,
  setShowFullContextMenu
}) => {
  const contexts = useSelector((state) => state.k8sConfig)

  const handleClick = (e) => {
    e.preventDefault()
    setShowFullContextMenu((prev) => !prev)
  }

  const handleMouseOver = (e) => {
    e.preventDefault()
    setAnchorEl(true)
  }

  const handleMouseLeave = (e) => {
    e.preventDefault()
    setAnchorEl(false)
  }

  return (
    <Box>
      <IconButton
        aria-label="contexts"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        disableFocusRipple
        disableRipple
      >
        <div>
          <img className="k8s-image" src="/static/img/kubernetes.svg" width="24px" height="24px" style={{ zIndex: '2' }} />
          <div>{contexts?.total_count || 0}</div>
        </div>
      </IconButton>
    </Box>
  )
}
