'use client'
import { DataAttributes, getRandomPhoto } from "@app/utils/utils";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";


// //2. Define the interface for Props.
interface Props {
    property: DataAttributes
}

// interface Location {
//   lat: number,
//   lng: number
// }



// export function MapComponent({ lat, lng }: Location) {
export default function Map({ property }: Props) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
       const initMap = async () => {

        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
            version: 'weekly'
          });

          const { Map } = await loader.importLibrary('maps');
          //init a marker
          const {  AdvancedMarkerElement } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

          const position = {
            // lat:-13.1403507,
            // lng:27.8493049
            lat: Number(property.latitude),
            lng: Number(property.longitude)
          }

          //map options
          const mapOptions: google.maps.MapOptions = {
              center: position,
              zoom: 13,
              mapId: 'Wilgrajo'
          }

          //setup the map
          const map = new Map(mapRef.current as HTMLDivElement,mapOptions);
          //put up a marker
          const marker = new AdvancedMarkerElement({
            map: map,
            position: position
          });

           // Create an info window
           const infoWindowContent = `
           <div class="max-w-xs">
             <h2 class="text-xl font-semibold mb-2">${property.title}</h2>
             <img src="${getRandomPhoto(property.photos)}" alt="${property.title}" className="max-h-[50px] max-w-[50px] rounded-lg">
             <p class="text-gray-600 mb-2">${property.description}</p>
             <p class="text-blue-500 font-semibold">Price: ${property.price}</p>
           </div>
         `;

         const infoWindow = new google.maps.InfoWindow({
           content: infoWindowContent
         });

           // Add click event listener to marker to open the info window
           marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });


       }
       initMap();
  },[property.latitude, property.longitude, property.title, property.description, property.price,property.photos]);


  return (
    <div style={{height:'400px'}} ref={mapRef}/>
  )

  // return (
  //   <GoogleMap
  //     zoom={16}
  //     center={{ lat, lng }}
  //     mapContainerClassName="rounded-xl sm:rounded-none h-full w-full"
  //   >
  //     <MarkerF position={{ lat, lng }} />
  //   </GoogleMap>
  // );
}

// export default function Map({ property }: Props) {
//   const lat = property.latitude;
//   const lng = property.longitude;
//   // const { isLoaded } = useLoadScript({
//   //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//   // });
  
//   // if (!isLoaded) return <div>Loading...</div>;
//   // return <MapComponent lat={lat} lng={lng}/>;
// }
