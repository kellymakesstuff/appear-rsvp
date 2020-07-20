import React, { useState, useEffect, useReducer } from 'react'
import '../css/singleguest.scss'
import { editGuest } from '../../services/ApiHelper'

export default function SingleGuest({ currentHouse, guest,
  allGuests, setAllGuests }) {


  let [editToggle, setEditToggle] = useState(true)
  let [singleGuest, setSingleGuest] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      first_name: guest.first_name,
      surname: guest.surname
    }
  )



  console.log("all guests in single guest", allGuests)
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

  let openFields = () => {
    if (editToggle) {
      return <div className="singleGuest">
        <input name="first_name" value={guest.first_name} onChange={(e) => handleEdit(e)} />
        <input name="surname" value={guest.surname} onChange={(e) => handleEdit(e)} />
        {/* // <input name="phone" value={guest.phone} onChange={(e) => handleEdit(e)} />
          // <input name="email" value={guest.email} onChange={(e) => handleEdit(e)} />
          // <input name="attending" type="radio" value="true" onChange={(e) => console.log(e.target.value)} />
          // <label for="attending">"Yes, I'll be there!"</label>
          // <input name="attending" type="radio" value="false" onChange={(e) => console.log(e.target.value)} />
          // <label for="attending">"No, I can't be there!"</label> */}
        {/* <input name="under10" value={guest.under10} onChange={(e) => handleEdit(e.target.value)} /> */}

        <button onClick={() => handleSubmit()}>Submit</button>


      </div >
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



// let handleEdit = (e) => {
//   // console.log(e.target)

//   // const { name, value } = e.target
//   // let midEdit = {
//   //   first_name: value,
//   //   surname: value
//   // }
//   // // setSingleGuest({
//   // //   singleGuest,
//   // //   [name]: value
//   // // })
//   console.log("singleGuest", singleGuest)
//   console.log("midEdit", midEdit)

// }