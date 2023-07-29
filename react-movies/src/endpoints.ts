const baseURL=process.env.REACT_APP_API_URL;
export const getUrlGenres = () => `${baseURL}/genres`;
export const getUrlActors=() => `${baseURL}/actors`;