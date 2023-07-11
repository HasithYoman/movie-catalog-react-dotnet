export interface actorCreationDTO{
    name:string;
    dateOfBirth?:Date; 
    picture?:File;
    pictureURL?: string;
    biograpy?: string;
}

export interface actorMovieDTO{
    id:number;
    name: string;
    character: string;
    picture: string;

}

