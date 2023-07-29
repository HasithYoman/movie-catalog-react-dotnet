import { ReactElement, useEffect, useState } from "react";
import { genreDTO } from "../genres/Genres.model";
import { getUrlGenres } from "../endpoints";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import Button from "../Button";
import customConfirm from "./CustomeConfirm";
import RecordsPerPageSelect from "./RecordsPerPageSelect";
import Pagination from "./Pagination";
import GenericList from "./GenericList";

export default function IndexEntity<T>(props: IndexEntityProps<T>){

    const [entities, setEntities]= useState<T[]>();
    const [totalAmountOfPages, setTotalAmountOfPages]= useState(0);;
    const [recordsPerPage, setRecordsPerPage]= useState(5);
    const [page,setPage]= useState(1);
    const urlGenres = getUrlGenres();

 
    useEffect(()=>{
       loadData();
    },[page, recordsPerPage])

    function loadData(){
        
        //console.log(urlGenres);
       
        axios.get(props.url, { 
            params:{page, recordsPerPage}
        })
                .then((response: AxiosResponse<T[]>)=>{
                    const totalAmountOfRecords=
                    parseInt(response.headers['totalamountofrecords'],10);
                    setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
                    setEntities(response.data);
                   // console.log(response.data);
                })
    }

    async function deleteEntity(id: number){

        const urlGenres=getUrlGenres();
        try{
            await axios.delete(`${props.url}/${id}`);
            loadData();
        }
        catch(error){
            if (axios.isAxiosError(error)) { // Check if it's an AxiosError
                if (error.response) {
                  console.error(error.response.data);
                }
              }
        }
    }

    const buttons = (editUrl: string, id:number) => <>
        <Link className="btn btn-success" to={editUrl}>Edit </Link>
        <Button onClick={()=> customConfirm(()=>deleteEntity(id)) } className="btn btn-danger">Delete</Button>
    </>

 return(
     <>
        <h3>{props.title}</h3>
        <Link className="btn btn-primary" to={props.createURL}>Create {props.entityName}</Link>

        <RecordsPerPageSelect onChange={amountOFRecords=>{
                setPage(1);
                setRecordsPerPage(amountOFRecords);
        }
            }/>

        <Pagination currentPage={page} totalAmountPages={totalAmountOfPages}
            onChange={newPage => setPage(newPage)}/>


        <GenericList list={entities}>
            <table className="table table-striped">
                {props.children(entities!, buttons)}
            </table>
        </GenericList>
     </>
 )
}

interface IndexEntityProps<T>{
    url: string;
    createURL: string;
    title: string;
    entityName:string;
    children(entities:T[], 
        buttons:(editUrl: string,id:number)=> ReactElement): ReactElement;
}

// function CustomConfirm(arg0: ()=>any):void{
//     throw new Error("Function not implemented.");
// }