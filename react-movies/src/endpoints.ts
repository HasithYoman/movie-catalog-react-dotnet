const baseURL=process.env.REACT_APP_API_URL;
export const getUrlGenres = () => `${baseURL}/genres`;
export const getUrlActors=() => `${baseURL}/actors`;
export const getUrlMovieTheaters=() => `${baseURL}/movietheaters`;
export const getMovies=() => `${baseURL}/movies`;