import { useState } from 'react'
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export function Search({onSearch}) {
const [value,setValue]=useState("");
const changeHandler=(e)=>{
setValue(e.target.value);
onSearch(e.target.value);
}
  return (
    <input onChange={changeHandler} value={value} className="search" type="text" placeholder="Search movies..." />
  )
}
// Search.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };