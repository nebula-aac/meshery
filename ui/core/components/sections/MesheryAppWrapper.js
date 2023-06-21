import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const Header = dynamic(() => import('./header/appNavBarHeader/Header'), {
  loading: () => <p>Loading...</p>
})

const Navigator = dynamic(() => import('./sidebar/sideMenu/Navigator'), {
  loading: () => <p>Loading...</p>
})

export default function MesheryAppWrapper (props) {
  return (
    <Fragment>
      <Header />
      <Navigator />
      <Main>
        <Toolbar />
        {props.children}
      </Main>
    </Fragment>
  )
}

function Main (props) {
  return (
    <Box component={'main'} sx={{ flexGrow: 1, p: 3 }} {...props}>
      {props.children}
    </Box>
  )
}
