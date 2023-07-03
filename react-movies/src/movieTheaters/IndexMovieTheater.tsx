import { Link } from "react-router-dom";

export default function IndexMovieTheater(){
    return(<>
        <h3>Genres</h3>
        <Link className="btn btn-primary" to="/movieTheaters/create">Create Movie Theaters</Link>
    </>)
}