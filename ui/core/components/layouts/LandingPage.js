import { Box } from '@mui/material'

export default function LandingPage (props) {
  return (
		<Box sx={{ display: 'flex' }} {...props}>
			{props.children}
		</Box>
  )
}
