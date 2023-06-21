import { Button, Tooltip } from '@mui/material'

export function TooltipButton ({
  children,
  onClick,
  title,
  variant,
  ...props
}) {
  return (
        <Tooltip title={title} placement="top" arrow>
            <Button variant={variant} onClick={onClick} {...props}>
                {children}
            </Button>
        </Tooltip>
  )
}
