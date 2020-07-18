import React from 'react'
import { Link, Route } from 'react-router-dom'
import AccessCode from './AccessCode'
import Gallery from '../functional/Gallery'
import RSVP from '../views/RSVP'


export default function Main(
  { households, setHouseholds,
    currentHouse, setCurrentHouse,
    guests, setGuests,
    photos, setPhotos,
    banana, setBanana,
    toMain, setToMain }) {

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
        households={households}
        setHouseholds={setHouseholds}
        banana={banana}
        setBanana={setBanana}
        toMain={toMain}
        setToMain={setToMain}
        currentHouse={currentHouse}
        setCurrentHouse={setCurrentHouse} />
    </Route>

    <Route path="/household">
      <RSVP
        households={households}
        setHouseholds={setHouseholds}
        currentHouse={currentHouse}
        setCurrentHouse={setCurrentHouse} />
    </Route>


  </>
}
