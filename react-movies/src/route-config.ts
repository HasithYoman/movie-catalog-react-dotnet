import CreateMovie from "./Movies/CreateMovie";
import EditMovie from "./Movies/EditMovie";
import FilterMovies from "./Movies/FilterMovies";
import LandingPage from "./Movies/LandingPage";
import CreateActors from "./actors/CreateActors";
import EditActors from "./actors/EditActors";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovieTheaters from "./movieTheaters/CreateMovieTheater";
import EditMovieTheaters from "./movieTheaters/EditMovieTheater";
import IndexMovieTheater from "./movieTheaters/IndexMovieTheater";

const routes =[
    //genres
    {path: '/genres', component: IndexGenres,exact:true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component: EditGenre},
    //actors
    {path: '/actors', component: IndexActors,exact:true},
    {path: '/actors/create', component: CreateActors},
    {path: '/actors/edit', component: EditActors},
    //movieTheaters
    {path: '/movieTheaters', component: IndexMovieTheater,exact:true},
    {path: '/movieTheaters/create', component: CreateMovieTheaters},
    {path: '/movieTheaters/edit', component: EditMovieTheaters},
    //movies
    {path: '/Movies/create', component: CreateMovie},
    {path: '/Movies/edit', component: EditMovie},
    {path: '/Movies/filter', component: FilterMovies},

    {path: '/', component:LandingPage, exact:true }

];

export default routes;