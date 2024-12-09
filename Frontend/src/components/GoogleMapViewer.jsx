import {
    GoogleMap,
    InfoWindowF,
    LoadScript,
    Marker,
  } from "@react-google-maps/api";
  import { useState } from "react";
  
  const containerStyle = {
    width: "100%",
    height: "450px",
  };
  
  const GoogleMapViewer = () => {

    const hiddenPlaces = [
        {
            name:'Alpha1',
            address:'Bhubaneswar, Odisha, India',
            latitude:20.34306103618985,
            longitude:85.81072209400884,
            status:1,
            ps:'Rasulgarh',
            psno:9938771133,
            resource:'Gas Detectors',
            available:''
          },
          {
            name:'Alpha2',
            address:'Cuttack, Odisha, India',
            latitude:20.462521,
            longitude:85.882989,
            status:1,
            ps:'Badambadi',
            psno:9938771133,
            resource:'Concrete Cutters',
            available:''
          },
          {
            name:'Alpha3',
            address:'Puri, Odisha, India',
            latitude:19.813382,
            longitude:85.831465,
            status:1,
            ps:'Atharnala',
            psno:9938771133,
            resource:'Gas Detectors',
            available:''
          },
          {
            name:'Alpha4',
            address:'Rourkela, Odisha, India',
            latitude:22.2604,
            longitude:84.8536,
            status:1,
            ps:'Rourkela Town',
            psno:9938771133,
            // resource:{a,b,c},
            available:''
          },
          {
            name:'Alpha5',
            address:'Sambalpur, Odisha, India',
            latitude:21.4669,
            longitude:83.9757,
            status:1,
            ps:'Sambalpur Town',
            psno:9938771133,
            resource:'Hydraulic Jacks',
            available:''
          },
          {
            name:'Alpha6',
            address:'Berhampur, Odisha, India',
            latitude:19.3140,
            longitude:84.7941,
            status:2,
            ps:'Berhampur Town',
            psno:9938771133,
            // resource:{a,s,c,d},
            available:''
          },
          {
            name:'Alpha7',
            address:'Balasore, Odisha, India',
            latitude:21.4927,
            longitude:86.9338,
            status:1,
            ps:'Bahanaga',
            psno:9938771133,
            resource:'Concrete Cutters',
            available:''
          },
          {
            name:'Alpha8',
            address:'Bhadrak, Odisha, India',
            latitude:21.0583,
            longitude:86.5186,
            status:2,
            ps:'Bhadrak Town',
            psno:9938771133,
            resource:'Hydraulic Jacks',
            available:''
          },
          {
            name:'Alpha9',
            address:'Baripada, Odisha, India',
            latitude:21.9373,
            longitude:86.7210,
            status:2,
            ps:'Baripada Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha10',
            address:'Chittoor, Andhra Pradesh, India',
            latitude:13.2174,
            longitude:79.1006,
            status:2,
            ps:'Chittoor Town',
            psno:9938771133,
            resource:'Hydraulic Jacks',
            available:''
          },
          {
            name:'Alpha11',
            address:'Kakinada, Andhra Pradesh, India',
            latitude:16.9891,
            longitude:82.2475,
            status:1,
            ps:'',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha12',
            address:'Kurnool, Andhra Pradesh, India',
            latitude:15.8281,
            longitude:78.0373,
            status:1,
            ps:'Kurnool Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha13',
            address:'Nellore, Andhra Pradesh, India',
            latitude:14.4426,
            longitude:79.9865,
            status:2,
            ps:'Nellore Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha14',
            address:'Prayagraj, Uttar Pradesh, India',
            latitude:25.4358,
            longitude:81.8463,
            status:1,
            ps:'Prayagraj Town',
            psno:9938771133,
            resource:'Hydraulic Jacks',
            available:''
          },
          {
            name:'Alpha15',
            address:'Varanasi, Uttar Pradesh, India',
            latitude:25.3176,
            longitude:82.9739,
            status:2,
            ps:'Varanasi Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha16',
            address:'Rasulgarh, Bhubaneswar, Odisha, India',
            latitude:20.2966,
            longitude:85.8220,
            status:1,
            ps:'Rasulgarh',
            psno:9938771133,
            resource:'Concrete Cutters',
            available:''
          },
          {
            name:'Alpha17',
            address:'Angul, Odisha, India',
            latitude:20.8400,
            longitude:85.1500,
            status:2,
            ps:'Angul Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha18',
            address:'Balangir, Odisha, India',
            latitude:20.7077,
            longitude:83.5041,
            status:1,
            ps:'Balangir Town',
            psno:9938771133,
            resource:'Concrete Cutters',
            available:''
          },
          {
            name:'Alpha19',
            address:'Bargarh, Odisha, India',
            latitude:21.3442,
            longitude:83.6167,
            status:2,
            ps:'Bargarh Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha20',
            address:'Barbil, Odisha, India',
            latitude:22.1217,
            longitude:85.3792,
            status:1,
            ps:'Barbil Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha21',
            address:'Keonjhar, Odisha, India',
            latitude:21.6433,
            longitude:85.5900,
            status:2,
            ps:'Keonjhar Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha22',
            address:'Bhandara, Maharashtra, India',
            latitude:21.1667,
            longitude:79.6500,
            status:1,
            ps:'Bhandara Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha23',
            address:'Gondia, Maharashtra, India',
            latitude:21.4602,
            longitude:80.1922,
            status:2,
            ps:'Gondia Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha24',
            address:'Adilabad, Telangana, India',
            latitude:19.6640,
            longitude:78.5320,
            status:1,
            ps:'Adilabad Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha24',
            address:'Hyderabad, Telangana, India',
            latitude:17.3850,
            longitude:78.4867,
            status:2,
            ps:'Hyderabad Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha26',
            address:'Karimnagar, Telangana, India',
            latitude:18.4392,
            longitude:79.1286,
            status:1,
            ps:'Karimnagar Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha27',
            address:'Nanded, Maharashtra, India',
            latitude:19.1383,
            longitude:77.3210,
            status:2,
            ps:'Nanded Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha28',
            address:'Nizamabad, Telangana, India',
            latitude:18.6725,
            longitude:78.0947,
            status:1,
            ps:'Nizamabad Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha29',
            address:'Mumbai, Maharashtra, India',
            latitude:19.0760,
            longitude:72.8777,
            status:2,
            ps:'Mumbai Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha30',
            address:'Pune, Maharashtra, India',
            latitude:18.5204,
            longitude:73.8567,
            status:1,
            ps:'Pune Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha31',
            address:'Thane, Maharashtra, India',
            latitude:19.2183,
            longitude:72.9781,
            status:2,
            ps:'Thane Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha32',
            address:'Navimumbai, Maharashtra, India',
      
            latitude:19.0330,
            longitude:73.0297,
            status:1,
            ps:'Navimumbai Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha33',
            address:'Kashmir, Jammu and Kashmir, India',
            latitude:34.0837,
            longitude:74.7973,
            status:1,
            ps:'Kashmir Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha34',
            address:'Jammu, Jammu and Kashmir, India',
            latitude:32.7266,
            longitude:74.8570,
            status:2,
            ps:'Jammu Town',
            psno:9938771133,
            resource:'',
            available:''
      
          },
          {
            name:'Alpha35',
            address:'Srinagar, Jammu and Kashmir, India',
            latitude:34.0837,
            longitude:75.7973,
            status:2,
            ps:'Srinagar Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha36',
            address:'Kargil, Jammu and Kashmir, India',
            latitude:34.5599,
            longitude:76.1250,
            status:1,
            ps:'Kargil Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha37',
            address:'Leh, Jammu and Kashmir, India',
            latitude:34.1526,
            longitude:77.5771,
            status:1,
            ps:'Leh Town',
            psno:9938771133,
            resource:'',
            available:''
          },
          {
            name:'Alpha38',
            address:'Gulmarg, Jammu and Kashmir, India',
            latitude:34.0496,
            longitude:74.3816,
            status:1,
            ps:'Gulmarg Town',
            psno:9938771133,
            resource:'',
            available:''
          }
      ]

    // const src = https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${encodeURIComponent(location)}&zoom=${zoom};
  
    // const mapRef = useRef(null);
    const viewPort = { lat: 22.6, lng: 78.56 };
    const [selectedPlace, setSelectedPlace] = useState(undefined);
    // const hiddenPlaces = dataset.hiddenplaces;
  
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={viewPort}
          options={{}}
          zoom={7}
        >
          {hiddenPlaces.map((place, index) => (
            <Marker
              key={index}
              place={place}
              onClick={() => {
                place === selectedPlace
                  ? setSelectedPlace(undefined)
                  : setSelectedPlace(place);
              }}
              position={{ lat: place.latitude, lng: place.longitude }}
            />
          ))}
          {selectedPlace && (
            <InfoWindowF
              position={{
                lat: selectedPlace.latitude,
                lng: selectedPlace.longitude,
              }}
              zIndex={1}
              options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
              onCloseClick={() => setSelectedPlace(undefined)}
            >
              <div>
                <h1 className="text-lg">{selectedPlace.name}</h1>
                <p className="text-base">PS:{selectedPlace.ps}</p>
                <p className="text-base">{selectedPlace.psno}</p>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default GoogleMapViewer;