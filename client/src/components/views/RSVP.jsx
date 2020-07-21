import React, { useState, useEffect } from 'react'
import SingleGuest from '../functional/SingleGuest'
import axios from 'axios'
import AddPhoto from '../functional/AddPhoto'

export default function RSVP({ households,
  currentHouse, setCurrentHouse,
  banana, photos, setPhotos,
  allGuests, setAllGuests,
  isLoading, setIsLoading }) {



  console.log("currentHouse in RSVP", currentHouse)
  console.log("allGuests in RSVP", allGuests)
  console.log("params", banana)

  // let [allGuests, setAllGuests] = useState([])


  let allGuestCall = async () => {
    let guestData = await axios(`https://salty-taiga-76954.herokuapp.com/households/${banana}/guests`)
    setAllGuests(guestData.data)

  }

  useEffect(() => {
    if (banana) {
      allGuestCall()
    }

  }, [])

  //trynow

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


      {allGuests && allGuests.map(guest => <SingleGuest guest={guest}
        allGuests={allGuests} setAllGuests={setAllGuests} currentHouse={currentHouse}
      />)}

      {/* {allGuests && <AddPhoto
        banana={banana}
        photos={photos}
        setPhotos={setPhotos}
        isLoading={isLoading}
        setIsLoading={setIsLoading} />} */}


    </div>
  )
}
