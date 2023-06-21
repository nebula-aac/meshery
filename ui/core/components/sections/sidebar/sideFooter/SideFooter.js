import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, ButtonGroup, ListItem } from '@mui/material'
import { Fragment } from 'react'

export function HelpIcons () {
  return (
        <Fragment>
            <ButtonGroup>
                <ListItem></ListItem>
            </ButtonGroup>
        </Fragment>
  )
}

export function Version () {
  return (
        <Fragment>
            <ListItem></ListItem>
        </Fragment>
  )
}

export function Chevron () {
  return (
        <Fragment>
            <Box>
                <Box>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        fixedWidth
                        size="1.5x"
                        style={{ margin: '0.75rem 0.2rem ', width: '0.8rem', verticalAlign: 'middle' }}
                        alt="Sidebar collapse toggle icon"
                    />
                </Box>
            </Box>
        </Fragment>
  )
}
