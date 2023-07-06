import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { coordinateDTO } from './coordinates.model';
import { useState } from 'react';


let defaultIcon= L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
    iconAnchor:[16,37]
});

L.Marker.prototype.options.icon=defaultIcon;

function Map(props: mapProps){
    const[coordinates,setCoordinates]= useState<coordinateDTO[]>([]);
    return(
        <MapContainer center={[6.8936218,79.8671156,]} zoom={14}
        style={{height:props.height}}>
            <TileLayer attribution='React Movies'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>

         <MapClick setCoordinates={coordinates=>{setCoordinates([coordinates]);
        }}/>

         {coordinates.map((coordinate,index)=><Marker key={index}
            position={[coordinate.lat,coordinate.lng]}/>)}
        </MapContainer>        
        
    )
}

export default Map
interface mapProps{
    height: string;
}

Map.defaultProps={
    height:'500px'
}

function MapClick(props: mapClickProps){
    useMapEvent('click',eventArgs=>{
    props.setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng})
    })
    return null;
}

interface mapClickProps{
    setCoordinates(coordinates: coordinateDTO):void;
}