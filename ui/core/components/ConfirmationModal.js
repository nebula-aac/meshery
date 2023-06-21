import { Dialog, DialogTitle } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { closeModal, openModal, setTabValue } from '../features/modal/modalSlice'

function ConfirmationMsg () {
  const dispath = useDispatch()
  const { open, tabVal } = useSelector((state) => state.modal)

  const handleOpen = () => {
    dispath(openModal())
  }

  const handleClose = () => {
    dispath(closeModal())
  }

  handleTabValChange = (event, value) => {
    dispath(setTabValue(value))
  }

  return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
        </Dialog>
  )
}
