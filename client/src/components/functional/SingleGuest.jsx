import React from 'react'
import '../css/singleguest.scss'

export default function SingleGuest({ currentHouse, guest }) {
  return <div className="box">
    <div className="guestBox">
      <div className="singleGuest">
        <h2>{guest.first_name}</h2>
        <h2>{guest.surname}</h2>
        <h2>{guest.phone}</h2>
        <h2>{guest.email}</h2>
        <h2>{guest.attending}</h2>
        <h2>{guest.under10}</h2>
      </div>
  </div>
  </div>
}
