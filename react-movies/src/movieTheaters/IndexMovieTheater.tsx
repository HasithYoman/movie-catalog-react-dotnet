import { Link } from "react-router-dom";
import { getUrlMovieTheaters } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { movieTheaterDTO } from "./MovieTheater.model";

export default function IndexMovieTheater(){

    const urlMovieTheaters=getUrlMovieTheaters();
    return(<>
        <IndexEntity<movieTheaterDTO>
            url={urlMovieTheaters} createURL="movietheaters/create" title="Movie theaters" 
            entityName="Movie Theater">
                {(entities, buttons)=><>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entities?.map(entity=> <tr key={entity.id}> 
                            <td>
                                {buttons(`movietheaters/edit/${entity.id}`, entity.id)}
                            </td>
                            <td>
                                {entity.name}
                            </td>
                        </tr>)}
                    </tbody>
                </>}
        </IndexEntity>
    </>)
} 