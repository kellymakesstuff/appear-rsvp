import React from 'react'
import { Link, Route } from 'react-router-dom'
import AccessCode from './AccessCode'
import Gallery from '../functional/Gallery'

export default function Main(
  { households, setHouseholds,
    guests, setGuests,
    photos, setPhotos,
    access, setAccess }) {

  console.log("households", households)
  console.log("guests", guests)
  console.log("photos", photos)


  return <>
    <div>
      <h2>in Main</h2>
    </div>



    <Route path="/" exact>
      <Gallery />
    </Route>

    <Route path="/accesscode">
      <AccessCode
        access={access}
        setAcess={setAccess} />
    </Route>



  </>
}
