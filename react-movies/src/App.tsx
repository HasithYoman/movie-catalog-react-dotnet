import React, { useEffect, useState } from 'react';
import './App.css';
import movieDTO from './Movies/movies.model';
import MoviesList from './Movies/MoviesList';

function App() {
  const [movies, setMovies] = useState<{ inTheaters?: movieDTO[]; upCommingReleases?: movieDTO[] }>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far from Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg'
          }
        ],
        upCommingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MWM3NzgtZDkwMS00M2Y5LWIwY2UtNTMyYWJlZWU2ZmMwXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_.jpg'
          }
        ]
      });
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <h3>In theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upCommingReleases} />
    </>
  );
}

export default App;
