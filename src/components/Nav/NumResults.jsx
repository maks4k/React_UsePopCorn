// import PropTypes from 'prop-types'

export function NumResults({numResults}) {
  return (
    <p className="num-results">
    Found <strong>{numResults}</strong> results
  </p>
  )
}
// NumResults.propTypes = {
//   numResults: PropTypes.number.isRequired,
// };