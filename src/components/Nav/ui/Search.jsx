// import { useState } from 'react'
import { useChangeInputValue } from '../model/useChangeInputValue'
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export function Search({onSearch}) {
const{value,changeHandler}=useChangeInputValue(onSearch)
  return (
    <input onChange={changeHandler} value={value} className="search" type="text" placeholder="Search movies..." />
  )
}
// Search.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };