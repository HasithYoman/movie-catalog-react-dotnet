// import { useState } from "react";
// import Autosuggest from "react-autosuggest";
// import { actorMovieDTO } from "../actors/actors.model";

// interface TypeAheadActorsProps {
//   displayName: string;
//   actors: actorMovieDTO[];
//   onAdd: (actors: actorMovieDTO[]) => void;
// }

// function TypeAheadActors(props: TypeAheadActorsProps) {
//   const [value, setValue] = useState("");
//   const [suggestions, setSuggestions] = useState<actorMovieDTO[]>([]);
//   const [selectedActors, setSelectedActors] = useState<actorMovieDTO[]>([]);

//   const getSuggestions = (inputValue: string) => {
//     const inputValueLowerCase = inputValue.toLowerCase();
//     return props.actors.filter((actor) =>
//       actor.name.toLowerCase().includes(inputValueLowerCase)
//     );
//   };

//   const getSuggestionValue = (suggestion: actorMovieDTO) => suggestion.name;

//   const renderSuggestion = (suggestion: actorMovieDTO) => (
//     <div>
//       <img
//         src={suggestion.picture}
//         alt={suggestion.name}
//         style={{ width: "100px" }}
//       />
//       <span>{suggestion.name}</span>
//     </div>
//   );

//   const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
//     setSuggestions(getSuggestions(value));
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const onChange = (event: any, { newValue }: { newValue: string }) => {
//     setValue(newValue);
//   };

//   const onSuggestionSelected = (
//     event: React.FormEvent<any>,
//     { suggestion }: { suggestion: actorMovieDTO }
//   ) => {
//     setSelectedActors([...selectedActors, suggestion]);
//   };

//   const addSelectedActors = () => {
//     props.onAdd(selectedActors);
//     setSelectedActors([]);
//   };

//   const inputProps = {
//     placeholder: "Write the name of the actor....",
//     value,
//     onChange,
//   };

//   return (
//     <div>
//       <label>{props.displayName}</label>
//       <Autosuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         onSuggestionSelected={onSuggestionSelected}
//         inputProps={inputProps}
//       />
//       <div>
//         {selectedActors.map(actor => (
//           <span key={actor.id}>{actor.name}, </span>
//         ))}
//       </div>
//       <button onClick={addSelectedActors}>Add Selected Actors</button>
//     </div>
//   );
// }

// export default TypeAheadActors;




import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useState } from "react";

interface typeAheadActorsProps{
  displayName:string;
  actors: actorMovieDTO[];
  onAdd(actors: actorMovieDTO[]):void
  onRemove(actor: actorMovieDTO):void
  listUI(actors: actorMovieDTO):ReactElement

}  

function TypeAheadActors(props: typeAheadActorsProps){

    const actors: actorMovieDTO[]=[{
        id:1, name: "Felipe", character: '', picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
        id:2, name: "Fernando", character: '', picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg'
    },
    {
        id:3, name: "Jesica", character: '', picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Under_Secretary_Zeya_Meets_With_UNHCR_Special_Envoy_Jolie_%2851942861677%29_%28cropped%29.jpg/220px-Under_Secretary_Zeya_Meets_With_UNHCR_Special_Envoy_Jolie_%2851942861677%29_%28cropped%29.jpg'
    }]

    const seleted: actorMovieDTO[]=[];


    const[draggedElement, setDragElement]=useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor: actorMovieDTO){
        setDragElement(actor);
    }

    function handleDragOver(actor: actorMovieDTO){
        if(!draggedElement){
            return;
        }
        if(actor.id !== draggedElement.id){
            
            const draggedElementIndex= props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex= props.actors.findIndex(x => x.id === actor.id);

            const actors =[...props.actors];
            actors[actorIndex]= draggedElement;
            actors[draggedElementIndex]= actor;
            props.onAdd(actors);
        }
    }

    return(
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actors => { 
                  //@ts-ignore
                  if(props.actors.findIndex(x=>x.id===actors[0].id)===-1 ){
                    //@ts-ignore
                     props.onAdd([...props.actors,actors[0]]);
                  }
                  
                    console.log(actors);
                } } options={actors} 
                //@ts-ignore   
                    labelKey={actor=> actor.name}  
                    filterBy={['name']}
                    placeholder="write the name of the actor...."     
                    minLength={1}    
                    flip={true}
                    selected={seleted}
                       
                    
                    renderMenuItemChildren={actor=>(
                      
                        <>
                        
                        <img alt="actor" 
                        //@ts-ignore
                            src={actor.picture}
                            style={{
                                 height: '64px',
                                 marginRight: '10px',
                                 width: '64px'
                          }} />
                          
                          <span>{
                            //@ts-ignore
                          actor.name
                          }</span>
                          
                          </>
                    
                      
                    )}>

            </Typeahead> 
                <ul className="list-group">
                    {props.actors.map(actor=> <li key={actor.id}
                        draggable={true}
                        onDragStart={()=>handleDragStart(actor)}
                        onDragOver={()=>handleDragOver(actor)}
                     className="list-group-item list-group-item-action">
                        {props.listUI(actor)}
                        <span className="badge badge-primary badge-pill pointer text-dark"
                        style={{marginLeft:'0.5rem'}}
                        onClick={()=> props.onRemove(actor)}>x</span>
                    </li>)}
                </ul>
            
        </div>
    )
}
export default TypeAheadActors




  
  
















