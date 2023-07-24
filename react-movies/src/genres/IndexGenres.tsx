import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./Genres.model";
import { getUrlGenres } from "../endpoints";
import GenericList from "../utils/GenericList";
import Button from "../Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
//import { urlGenres } from "../endpoints";

export default function IndexGenres(){

    const [genres, setGenres]= useState<genreDTO[]>();
    const [totalAmountOfPages, setTotalAmountOfPages]= useState(0);;
    const [recordsPerPage, setRecordsPerPage]= useState(5);
    const [page,setPage]= useState(1);


    useEffect(()=>{
        const urlGenres = getUrlGenres();
        //console.log(urlGenres);
       
        axios.get(urlGenres, {
            params:{page, recordsPerPage}
        })
                .then((response: AxiosResponse<genreDTO[]>)=>{
                    const totalAmountOfRecords=
                    parseInt(response.headers['totalamountofrecords'],10);
                    setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
                    setGenres(response.data);
                   // console.log(response.data);
                })
    },[page, recordsPerPage])
    return(<>
        <h3>Genres</h3>
        <Link className="btn btn-primary" to="/genres/create">Create genre</Link>

        <RecordsPerPageSelect onChange={amountOFRecords=>{
                setPage(1);
                setRecordsPerPage(amountOFRecords);
        }
            }/>

        <Pagination currentPage={page} totalAmountPages={totalAmountOfPages}
            onChange={newPage => setPage(newPage)}/>
        <GenericList list={genres}>
            <table className="table table-striped">
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
                                <Link className="btn btn-success" to={'/genres/${genre.id}'}>Edit </Link>
                                <Button className="btn btn-danger">Delete</Button>
                            </td>
                            <td>
                                {genre.name}
                                </td>
                        </tr>)}
                </tbody>
            </table>
        </GenericList>
    </>)
}
