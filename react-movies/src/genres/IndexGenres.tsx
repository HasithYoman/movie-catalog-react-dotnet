import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./Genres.model";
import { getUrlGenres } from "../endpoints";
import GenericList from "../utils/GenericList";
import Button from "../Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import customConfirm from "../utils/CustomeConfirm";
import IndexEntity from "../utils/IndexEntity";
//import { urlGenres } from "../endpoints";

export default function IndexGenres(){
    const urlGenres= getUrlGenres();


    return(<>
        <IndexEntity<genreDTO>
            url={urlGenres} createURL="genres/create" title="Genres"
            entityName="Genre"
            >

                {(genres,buttons)=><>
                    <thead>
                     <tr>
                       <th></th>
                      <th>Name</th> 
                    </tr>
                    
                </thead>
                <tbody>
                    {genres?.map(genre =>
                        <tr key={genre.id}>
                            <td>
                                {buttons(`genres/edit/${genre.id}`, genre.id)}
                            </td>
                            <td>
                                {genre.name}
                                </td>
                        </tr>)}
                </tbody>
                </>}
                
        </IndexEntity>
        
    </>)
}
