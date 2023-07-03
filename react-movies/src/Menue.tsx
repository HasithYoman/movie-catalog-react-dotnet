import { BrowserRouter, NavLink } from 'react-router-dom';

function Menue() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          React Movies
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/genres" className="nav-link">
                Genres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Movies/filter" className="nav-link">
                Filter Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/actors" className="nav-link">
                 Actors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movieTheaters" className="nav-link">
                Movie Theaters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Movies/create" className="nav-link">
                Create a movie
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menue;

