"use client"
import { LoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../context/UserLocationContext';
import Markers from './Markers';
import { SelectedBusinessContext } from '../../context/SelectedBusinessContext';
function GoogleMapView({businessList}) {

    const{userLocation,setUserLocation} = useContext(UserLocationContext)
    const containerStyle={
        width:'100%',
        height:'70vh'
    }

    const coordinate ={ lat:13.745254902995399, lng: 100.54360134310917}
    console.log(userLocation)
  return (
    <div>
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            mapIds={['562aca4945d1eb37']}
        >
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation}
            zoom={15}
            options={{mapId:'562aca4945d1eb37'}}
            >
                <MarkerF
                position={userLocation}
                icon={{
                    url:'/user-location.png',
                    scaledSize:{
                        width:50,
                        height:50
                    }
                }
                }
                />
                {businessList.map((item,index)=>(
                    <Markers business={item} key={index}/>
                ))}
            </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default GoogleMapView