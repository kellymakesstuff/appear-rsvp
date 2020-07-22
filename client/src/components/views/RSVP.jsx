import React, { useState, useEffect } from 'react'
import SingleGuest from '../functional/SingleGuest'
import axios from 'axios'
import AddPhoto from '../functional/AddPhoto'
import { withRouter } from 'react-router-dom'
import '../css/singleguest.scss'

function RSVP({ households,
  currentHouse, setCurrentHouse,
  banana, setBanana,
  photos, setPhotos,
  allGuests, setAllGuests,
  isLoading, setIsLoading, match }) {

  localStorage.setItem("banana", match.params.banana)
  setBanana(match.params.banana)

  let allGuestCall = async () => {
    let guestData = await axios(`https://salty-taiga-76954.herokuapp.com/households/${match.params.banana}/guests`)
    setAllGuests(guestData.data)

  }

  useEffect(() => {
    allGuestCall()

  }, [])



  return (
    <div>


      {currentHouse &&
        <div>
          <h1>The {currentHouse.surname} Family</h1>
          <h2>{currentHouse.address1}</h2>
          <h2>{currentHouse.address2}</h2>
          <h2>{currentHouse.city}, {currentHouse.state} {currentHouse.zip}</h2>
          <h2>Guest Count: {currentHouse.guest_count}</h2>
          <h2>Currently Registered Guests: {currentHouse.guests.length}</h2>
        </div>}


      {/* <div className="allGuestsBox"> */}
      {allGuests && allGuests.map(guest =>
        <SingleGuest
          guest={guest}
          allGuests={allGuests}
          setAllGuests={setAllGuests}
          currentHouse={currentHouse} />)}
      {/* </div> */}

      {/* {allGuests && <AddPhoto
        banana={banana}
        photos={photos}
        setPhotos={setPhotos}
        isLoading={isLoading}
        setIsLoading={setIsLoading} />} */}


    </div>
  )
}

export default withRouter(RSVP)