import { JobPosition } from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectAllPositions, selectVisiblePosition} from "../store/reducers/position/positionsSelectors";
import {addFilter} from "../store/reducers/filter/filterActions";
import {selectFilters} from "../store/reducers/filter/filterSelectors";

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePosition(state,currentFilters))

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export {JobList};