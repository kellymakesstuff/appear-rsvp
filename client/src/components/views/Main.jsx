import React from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import AccessCode from './AccessCode'
import GalleryBox from '../functional/GalleryBox'
import AddPhoto from '../functional/AddPhoto'
import RSVP from '../views/RSVP'


export default function Main(
  { households, setHouseholds,
    currentHouse, setCurrentHouse,
    allGuests, setAllGuests,
    photos, setPhotos,
    banana, setBanana,
    toMain, setToMain,
    isLoading, setIsLoading }) {

  console.log("households", households)
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
        setCurrentHouse={setCurrentHouse}
        allGuests={allGuests}
        setAllGuests={setAllGuests} />
    </Route>

    <Route path="/household/:banana">
      <RSVP
        households={households}
        setHouseholds={setHouseholds}
        currentHouse={currentHouse}
        setCurrentHouse={setCurrentHouse}
        banana={banana}
        setBanana={setBanana}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        photos={photos}
        setPhotos={setPhotos}
        allGuests={allGuests}
        setAllGuests={setAllGuests} />
    </Route>

    <Route path="/addphoto">
      <AddPhoto
        banana={banana}
        photos={photos}
        setPhotos={setPhotos}
        isLoading={isLoading}
        setIsLoading={setIsLoading} />
    </Route>

  </>
}
