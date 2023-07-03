import LandingPage from "./Movies/LandingPage";
import IndexGenres from "./genres/IndexGenres";

const routes =[

    {path: '/genres', component: IndexGenres, isAdmin:true},
    {path: '/', component:LandingPage, exact:true }

];

export default routes;