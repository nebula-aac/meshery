import { Close } from '@mui/icons-material'
import { Button, IconButton, NoSsr } from '@mui/material'
import { closeSnackbar, enqueueSnackbar } from 'notistack'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FiltersCard from './FiltersCard'

import CatalogFilter from '@/core/components/CatalogFilter'
import { deleteFilters, setFilters, uploadFilters } from '@/core/features/filters/filtersSlice'
import { updateProgress } from '@/core/features/progress/progressSlice'
import { FILE_OPS } from '@/core/utils/constants'

function resetSelectedFIlter () {
  return {
    show: false,
    filter: null
  }
}

function MesheryFilters ({
  catalogVisibility,
  handleCatalogVisibility
}) {
  const [selectedRowData, setSelectedRowData] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState(resetSelectedFIlter())
  const [viewType, setViewType] = useState(('grid'))

  const dispatch = useDispatch
  const filters = useSelector((state) => state.filters)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('')
        const data = await response.json()
        dispatch(setFilters(data))
      } catch (error) {
        console.error('Error fetching filters:', error)
      }
    }
    fetchData()
  }, [dispatch])

  function resetSelectedRowData () {
    return () => {
      setSelectedRowData(null)
    }
  }

  const handleSubmit = async ({ data, name, filterID, type }) => {
    console.info('processing filter', name)
    dispatch(updateProgress({ showProgress: true }))

    if (type === FILE_OPS.DELETE) {
      const response = await showModal(1)
      if (response === 'No') {
        dispatch(updateProgress({ showProgress: false }))
        return
      }
      try {
        dispatch(deleteFilters({ filterID, name }))
        dispatch(updateProgress({ showProgress: false }))
        enqueueSnackbar(`"${name} Filter deleted`, {
          variant: 'success',
          action: function Action (key) {
            return (
              <IconButton
                key="close"
                aria-label='Close'
                color='inherit'
                onClick={() => closeSnackbar(key)}>
                <Close />
              </IconButton>
            )
          }
          // autoHideDuration: 2000,
        })
        resetSelectedRowData()()
      } catch (error) {
        //
      }
    }

    if (type === FILE_OPS.FILE_UPLOAD || type === FILE_OPS.URL_UPLOAD) {
      try {
        dispatch(uploadFilters({ type, data }))
        dispatch(updateProgress({ showProgress: false }))
      } catch (error) {
        //
      }
    }
  }

  return (
    <Fragment>
      <NoSsr>
        {selectedRowData && Object.keys(selectedRowData).length > 0 && (
          <Fragment>
            {/** Editor */}
          </Fragment>
        )}
        <div>
          {!selectedFilter.show && (filters.length > 0 || viewType === 'table') &&
            <div>
              <div>
                <Button>
                  Import filters
                </Button>
              </div>
            </div>
          }
          <div>
            <CatalogFilter
              catalogVisibility={catalogVisibility}
              handleCatalogVisibility={handleCatalogVisibility}
            />
          </div>
          {!selectedFilter.show && viewType === 'table' &&
            <Fragment>
              {/** Data Table */}
            </Fragment>
          }
          {
            !selectedFilter.show && viewType === 'grid' &&
            <FiltersCard
              filters={filters}
            />
          }
        </div>
      </NoSsr>
    </Fragment>
  )
}

export default MesheryFilters
