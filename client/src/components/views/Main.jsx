import React from 'react'
import { Link, Route } from 'react-router-dom'
import AccessCode from './AccessCode'
import GalleryBox from '../functional/GalleryBox'
import AddPhoto from '../functional/AddPhoto'
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

    <Route path="/" exact>
      <GalleryBox photos={photos} />
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
        setCurrentHouse={setCurrentHouse}
        banana={banana}
        setBanana={setBanana} />
    </Route>

    <Route path="/addphoto">
      <AddPhoto
        banana={banana}
        photos={photos}
        setPhotos={setPhotos} />
    </Route>

  </>
}
