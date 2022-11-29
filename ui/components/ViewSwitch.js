import { ToggleButton, ToggleButtonGroup } from "@mui/lab";
import GridOnIcon from "@mui/icons/GridOn";
import TableChartIcon from "@mui/icons/TableChart";

function ViewSwitch({ view, changeView }) {
  return (
    <ToggleButtonGroup
      size="small"
      value={view}
      exclusive
      onChange={(_, newView) => {
        if (newView !==null){
          changeView(newView)
        }
      }
      }
      aria-label="Switch View"
    >
      <ToggleButton value="grid" data-cy="grid-view">
        <GridOnIcon />
      </ToggleButton>
      <ToggleButton value="table" data-cy="table-view">
        <TableChartIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ViewSwitch
