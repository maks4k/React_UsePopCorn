import Serch from "./Serch"
import NumResults from "./NumResults"
function Navbar() {
  return (
    <nav className="nav-bar">
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  <Serch />
  <NumResults />
    </nav>
    
  )
}

export default Navbar