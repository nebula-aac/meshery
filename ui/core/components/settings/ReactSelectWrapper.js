import { Typography } from '@mui/material'
import CreatableSelect from 'react-select/creatable'

function NoOptionsMessage (props) {
  return (
    <Typography
      color={'textSecondary'}
    >
      {props.children}
    </Typography>
  )
}

export default function ReactSelectWrapper () {
  return (
        <CreatableSelect />
  )
}
