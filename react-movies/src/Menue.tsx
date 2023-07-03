import { NavLink } from "react-router-dom";

function Menue() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand" >
          React Movies
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/genres" className="nav-link" >
                Genres
              </a>
            </li> 
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default Menue;
