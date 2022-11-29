import VisibilityIcon from '@mui/icons/Visibility';
import VisibilityOffIcon from '@mui/icons/VisibilityOff';
import { Button } from "@mui/material";

function CatalogFilter({ catalogVisibility, handleCatalogVisibility, hideCatalog }) {
  return (
    <>
      { !hideCatalog &&  // In application we  don't have catalog, hence this check
        <Button onClick = {handleCatalogVisibility} variant="contained" color="primary" endIcon={catalogVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}>
         CATALOG
        </Button>
      }
    </>
  )
}

export default CatalogFilter