import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import NoSsr from '@mui/material/NoSsr'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'

import exportToJsonFile from './exportToJsonFile'
import RenderAccountExtension from './renderAccountExtension'

import useFetchUserData from '@/core/hooks/useFetchUserData'
import withMetadata from '@/core/utils/getMetadataWrapper'

const User = ({
  getPath,
  pageTitle,
  color
}) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const { user, loading, error } = useFetchUserData('/api/user', {
    credentials: 'same-origin'
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleClose = (event) => {
    if (anchorEl.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handlePreference = () => {
    router.push('/user/preferences')
  }

  const handleLogout = () => {
    window.location = '/user/logout'
  }

  const handleGetToken = () => {
    const data = user
    exportToJsonFile(data, 'auth.json')
  }

  return (
        <Fragment>
            <NoSsr>
                <Box data-test="profile-button">
                    <IconButton
                        color={color}
                        ref={(node) => {
                          anchorEl = node
                        }}
                    >
                        <Avatar />
                    </IconButton>
                </Box>
                <Popper
                    open={open}
                    anchorEl={anchorEl}
                    transition style={{ zIndex: 10000 }}
                    placement="top-end"
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{
                              transformOrigin: placement === 'bottom'
                                ? 'left top'
                                : 'left bottom'
                            }}
                        >
                            <Paper className={classes.popover}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList>
                                        {account && account.length
                                          ? (
                                                <RenderAccountExtension
                                                    accountExtensions={account}
                                                />
                                            )
                                          : null
                                        }
                                        <MenuItem onClick={handleGetToken}>Get Token</MenuItem>
                                        <MenuItem onClick={handlePreference}>Preferences</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </NoSsr>
        </Fragment>
  )
}

export default withMetadata(UserPref)
