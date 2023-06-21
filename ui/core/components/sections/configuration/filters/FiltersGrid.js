import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FiltersCard from './FiltersCard'

import { addDeployedFilter, setCloneFilterId, setModalOpen } from '@/core/features/filters/filtersGridSlice'
import { addFilter, removeFilter, setFilters } from '@/core/features/filters/filtersSlice'
import { updateGridProps } from '@/core/features/grid/gridSlice'

const INITIAL_GRID_SIZE = { xl: 4, md: 6, xs: 12 }
const FULL_GRID_SIZE = { xl: 12, md: 12, xs: 12 }

function FilterCardGridItem ({
  filter
}) {
  const dispatch = useDispatch()
  const gridProps = useSelector((state) => state.grid.gridProps)

  const handleRequestFullSize = () => {
    dispatch(updateGridProps({ ...gridProps, FULL_GRID_SIZE }))
  }

  const handleRequestSizeRestore = () => {
    dispatch(updateGridProps({ ...gridProps, INITIAL_GRID_SIZE }))
  }

  return (
        <Grid item {...gridProps}>
            <FiltersCard
                name={filter.name}
            />
        </Grid>
  )
}

function FiltersGrid () {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)

  useEffect(() => {
    const fetchFilters = async () => {
      const response = await fetchFiltersFromAPI()
      dispatch(setFilters(response.data))
    }

    fetchFilters()
  }, [dispatch])

  const handleClone = (filterID, filterName) => {
    dispatch(setCloneFilterId(filterID))
  }

  const handleModalOpen = (filter, isDeploy) => {
    dispatch(setModalOpen({
      open: true,
      deploy: isDeploy,
      fileFile: filter.fileFile,
      name: filter.name,
      count: getComponentsInFile(filter.fileFile)
    }))
  }

  const handleDeploy = (fileFile) => {
    dispatch(addDeployedFilter(fileFile))
  }

  const handleUndeploy = (fileFile) => {

  }

  const handleSubmit = (data) => {

  }

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  const handleRemoveFilter = (filterID) => {
    dispatch(removeFilter(filterID))
  }

  return (
        <div>
            <Grid container spacing={3}>
                {filters.map((filter) => {
                    <FilterCardGridItem
                        key={filter.id}
                        filter={filter}
                        handleClone={() => handleClone(filter.id, filter.name)}
                        handleDeploy={() => handleModalOpen(filter, true)}
                        handleUndeploy={() => handleModalOpen(filter, false)}
                        handleSubmit={handleSubmit}
                        setSelectedFilters={setSelectedFilter}
                    />
                })}
            </Grid>
        </div>
  )
}

export default FiltersGrid
