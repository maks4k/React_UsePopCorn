import React from 'react'

export function Error({msg}) {
  return (
    <p className="error">
    <span>⛔️{msg}</span>
  </p>
  )
}

// export default Error