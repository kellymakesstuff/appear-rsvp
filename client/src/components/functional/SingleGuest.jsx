import React, { useState, useEffect } from 'react'
import '../css/singleguest.scss'

export default function SingleGuest({ currentHouse, guest }) {
  let [editToggle, setEditToggle] = useState(null)
  let [singleGuest, setSingleGuest] = useState({
    [name]: [value]
  })



  return <div className="box">
    <div className="guestBox">

      <div className="singleGuest">
        <h2>{guest.first_name}</h2>
        <h2>{guest.surname}</h2>
        <h2>{guest.phone}</h2>
        <h2>{guest.email}</h2>
        <h2>{guest.attending}</h2>
        <h2>{guest.under10}</h2>
        <button onClick={() => setEditToggle(true)}>Edit</button>
      </div>

      {editToggle &&
        <div className="singleGuest">
          <input name={first_name} value={guest.first_name} />
          <input name={surname} value={guest.surname} />
          <input name={phone} value={guest.phone} />
          <input name={email} value={guest.email} />
          <input name={attending} value={guest.attending} />
          <input name={under10} value={guest.under10} />
        </div>
        <button onClick={() => setEditToggle(null)}>Submit</button>
      }

    </div>
  </div>
}


//// toggle edit or <h2>
// create state here to hold guest info
// write handle change to edit state here
// write a function in app to edit guest, put/post, and get current household 