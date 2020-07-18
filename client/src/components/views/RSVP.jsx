import React from 'react'
import SingleGuest from '../functional/SingleGuest'

export default function RSVP({ households, currentHouse, setCurrentHouse }) {

  console.log("currentHouse in RSVP", currentHouse)




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


      {currentHouse && currentHouse.guests.map(guest => <SingleGuest guest={guest} />)}




    </div>
  )
}
