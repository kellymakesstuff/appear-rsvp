import React, { useState, useEffect } from 'react'
import '../css/singleguest.scss'

export default function SingleGuest({ currentHouse, guest }) {
  let [editToggle, setEditToggle] = useState(true)
  let [singleGuest, setSingleGuest] = useState({})

  // {
  //   [name]: [value]
  // }

  let openFields = () => {
    if (editToggle) {
      return <div className="singleGuest">
        <input name="first_name" value={guest.first_name} onChange={(e) => handleEdit(e.target.value)} />
        <input name="surname" value={guest.surname} onChange={(e) => handleEdit(e.target.value)} />
        <input name="phone" value={guest.phone} onChange={(e) => handleEdit(e.target.value)} />
        <input name="email" value={guest.email} onChange={(e) => handleEdit(e.target.value)} />
        <input name="attending" value={guest.attending} onChange={(e) => handleEdit(e.target.value)} />
        <input name="under10" value={guest.under10} onChange={(e) => handleEdit(e.target.value)} />
        <button onClick={() => setEditToggle(null)}>Submit</button>
      </div>
    } else {
      return <div className="singleGuest">
        <h2>{guest.first_name}</h2>
        <h2>{guest.surname}</h2>
        <h2>{guest.phone}</h2>
        <h2>{guest.email}</h2>
        <h2>{guest.attending}</h2>
        <h2>{guest.under10}</h2>
        <button onClick={() => setEditToggle(true)}>Edit</button>
      </div>
    }
  }

  let handleEdit = (e) => {
    setSingleGuest(...singleGuest, {
      e
    })
    console.log("singleGuest", singleGuest)
    setEditToggle(null)
  }

  return <div className="box">
    <div className="guestBox">

      {openFields()}

    </div>
  </div>
}


//// toggle edit or <h2>
// create state here to hold guest info
// write handle change to edit state here
// write a function in app to edit guest, put/post, and get current household 