"use client"
import { useEffect, useState } from 'react'
import HeaderNavBar from '../components/HeaderNavBar'
import Provider from './Provider'
import './globals.css'
import { Raleway} from 'next/font/google'
import UserLocationContext from '../context/UserLocationContext';
import SelectedBusinessContext from '../context/SelectedBusinessContext'

const raleway = Raleway({ subsets: ['latin'] })

const metadata = {
  title: 'Map of Burmese Places in Bangkok',
  description: 'Burmese Foods Around You',
}

export default function RootLayout({ children }) {

 const [userLocation,setUserLocation] = useState([]);

  useEffect(()=>{
    getUserLocation();
  },[])

  const getUserLocation = ()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos)
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }

  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
          <HeaderNavBar/>
        {children}
        </UserLocationContext.Provider>
          </Provider></body>
    </html>
  )
  }
