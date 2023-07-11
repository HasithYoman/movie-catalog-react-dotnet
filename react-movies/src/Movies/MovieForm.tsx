import { Form, Formik, FormikHelpers } from "formik"
import { MovieCreationDTO } from "./movies.model";
import * as Yup from 'yup'
import Button from "../Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckBoxField from "../forms/CheckBoxField";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/Genres.model";
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";
import { actorMovieDTO } from "../actors/actors.model";

function MovieForm(props: movieFormProps){

    const [selectedGenres, setSelectedGenres]= useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres]= useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheatres, setSelectedMovieTheatres]= useState(mapToModel(props.selectedMovieTheatres));
    const [nonSelectedMovieTheatres, setNonSelectedMovieTheatres]= useState(mapToModel(props.nonSelectedMovieTheatres));
    const[selectedActors,setSelectedActors]=useState(props.selectedActors)
    const handleAddActors = (actors: actorMovieDTO[]) => {
        // Do something with the selected actors array
        console.log("Selected Actors:", actors);
      }

    function mapToModel(items:{id: number, name:string}[]):multipleSelectorModel[]{
        return items.map(item =>{
            return{key: item.id, value: item.name}
        })
    }

    return(
        <Formik
             initialValues={props.model}
             onSubmit={(values,action)=>{
                values.genresIds= selectedGenres.map(item=> item.key); 
                values.movieTheaterIds= selectedMovieTheatres.map(item => item.key)
                values.actors=selectedActors;
                props.onSubmit(values,action)
            }}
             validationSchema={Yup.object({
                title:Yup.string().required('This field  is required').firstLetterUppercase()
             })}
            >
            {(formikProps)=>( 
                <Form>
                    <TextField displayName="Title" field="title"/>
                    <CheckBoxField displayName="In Theaters" field="inTheaters"/>
                    <TextField displayName="Trailer" field="trailer"/>
                    <DateField displayName="Release Date" field="releaseDate"/>
                    <ImageField displayName="Poster" field="poster"
                        imageURL={props.model.posterURL}
                        />
                    <MultipleSelector 
                        displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected, nonSelected)=>{
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector 
                        displayName="Movie Theaters"
                        nonSelected={nonSelectedMovieTheatres}
                        selected={selectedMovieTheatres}
                        onChange={(selected, nonSelected)=>{
                            setSelectedMovieTheatres(selected);
                            setNonSelectedMovieTheatres(nonSelected);
                        }}  
                    />
                    <TypeAheadActors actors={selectedActors} displayName="Actors"  onAdd={actors=>{
                        setSelectedActors(actors);
                    }}
                    onRemove={actor=>{
                        const actors= selectedActors.filter(x=> x !== actor);
                        setSelectedActors(actors);
                    }}
                    listUI={(actor:actorMovieDTO)=>
                    <>
                        {actor.name} /  <input placeholder="Character" type="text"
                            value={actor.character}
                            onChange={e => {
                                const index= selectedActors.findIndex(x =>x.id === actor.id);
                                const actors = [...selectedActors];
                                actors[index].character= e.currentTarget.value;
                                setSelectedActors(actors);

                            }}  />
                    </>
                    }
                    />
                    

                    <Button disabled={formikProps.isSubmitting} 
                    type='submit'>Save Changes</Button>
                    <Link className='btn btn-secondary' to='/genres'> Cancle</Link>
                </Form>
            )}
            
        </Formik>
    )
}

export default MovieForm

interface movieFormProps{
    model:MovieCreationDTO;
    onSubmit(values: MovieCreationDTO,action: FormikHelpers<MovieCreationDTO>):void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheatres: movieTheaterDTO[];
    nonSelectedMovieTheatres: movieTheaterDTO[];
    selectedActors:actorMovieDTO[];
}