function Menue() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            React Movies
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {/* Use 'ml-auto' class to align the genres link to the left */}
              <li className="nav-item">
                <a className="nav-link" href="/genres">
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
  