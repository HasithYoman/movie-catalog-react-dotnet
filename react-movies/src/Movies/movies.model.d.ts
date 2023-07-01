///type definition file exclusively exprting interfaces

export default interface movieDTO{
    id: number;
    title: string;
    poster: string;
}



export default interface LandingPageDTO{
    
    inTheaters?: movieDTO[];
    upCommingReleases?: movieDTO[];
}