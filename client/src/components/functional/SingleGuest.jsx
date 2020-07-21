import React, { useState, useEffect, useReducer } from 'react'
import '../css/singleguest.scss'
import { editGuest, deleteGuest } from '../../services/ApiHelper'

export default function SingleGuest({ currentHouse, guest,
  allGuests, setAllGuests }) {


  let [editToggle, setEditToggle] = useState(true)
  let [viewToggle, setViewToggle] = useState(true)

  let [singleGuest, setSingleGuest] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      first_name: guest.first_name,
      surname: guest.surname,
      phone: guest.phone,
      email: guest.email,
      attending: guest.attending,
      under10: guest.under10

    }
  )



  console.log("all guests in single guest", allGuests)
  console.log("currentHouse in single guest", currentHouse)
  console.log("single guests in single guest", singleGuest)

  let handleEdit = (e) => {
    console.log(e.target)

    const { name, value } = e.target
    setSingleGuest({ [name]: value })
    console.log("singleGuest", singleGuest)
    // console.log("midEdit", midEdit)

  }


  let handleSubmit = () => {
    let lookupId = guest.id
    editGuest(lookupId, singleGuest)
    setEditToggle(null)
  }

  let handleDelete = () => {
    let lookupId = guest.id
    deleteGuest(lookupId)
    setViewToggle(null)
    setEditToggle(null)
  }

  let openFields = () => {
    if (editToggle) {
      return <div className="singleGuest">
        <input name="first_name" value={singleGuest.first_name} onChange={(e) => handleEdit(e)} />
        <input name="surname" value={singleGuest.surname} onChange={(e) => handleEdit(e)} />
        <input name="phone" value={singleGuest.phone} onChange={(e) => handleEdit(e)} />
        <input name="email" value={singleGuest.email} onChange={(e) => handleEdit(e)} />
        <input name="attending" type="radio" value="true" onChange={(e) => handleEdit(e)} />
        <label for="attending">"Yes, I'll be there!"</label>
        <input name="attending" type="radio" value="false" onChange={(e) => handleEdit(e)} />
        <label for="attending">"No, I can't be there!"</label>
        <input name="under10" value={guest.under10} type="checkbox" value="true" onChange={(e) => handleEdit(e)} />

        <button onClick={() => handleSubmit()}>Submit</button>
        <button onClick={() => handleDelete()}>Delete</button>

      </div >
    } else if (!viewToggle) {
      return <p>Guest deleted</p>

    } else {
      return <div className="singleGuest">
        <h2>{singleGuest.first_name}</h2>
        <h2>{singleGuest.surname}</h2>
        <h2>{singleGuest.phone}</h2>
        <h2>{singleGuest.email}</h2>
        <h2>{singleGuest.attending}</h2>
        <h2>{guest.under10}</h2>
        <button onClick={() => setEditToggle(true)}>Edit</button>
      </div>
    }
  }



  return <div className="box">
    <div className="guestBox">

      {openFields()}

    </div>
  </div>
}

