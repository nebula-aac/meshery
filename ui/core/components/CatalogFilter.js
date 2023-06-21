import { Visibility, VisibilityOff } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { Fragment } from 'react'

function CatalogFilter ({
  catalogVisibility,
  handleCatalogVisibility,
  hideCatalog
}) {
  return (
        <Fragment>
            {!hideCatalog &&
                <Button
                    onClick={handleCatalogVisibility}
                    variant="contained"
                    color="primary"
                    endIcon={catalogVisibility ? <Visibility /> : <VisibilityOff />}
                >
                    CATALOG
                </Button>
            }
        </Fragment>
  )
}

export default CatalogFilter
