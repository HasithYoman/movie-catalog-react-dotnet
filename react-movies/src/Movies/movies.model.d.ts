///type definition file exclusively exprting interfaces

export default interface movieDTO{
    id: number;
    title: string;
    poster: string;
}

export interface MovieCreationDTO{
    title:string;
    inTheater:boolean;
    trailer:string;
    releaseDate?: Date;
    poster?: File;
    posterURL?:string;

}

export default interface LandingPageDTO{
    
    inTheaters?: movieDTO[];
    upCommingReleases?: movieDTO[];
}