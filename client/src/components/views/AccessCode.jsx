import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default function AccessCode({
  households, setHouseholds,
  banana, setBanana,
  toMain, setToMain,
  currentHouse, setCurrentHouse,
  allGuests, setAllGuests }) {

  console.log("banana", banana, setCurrentHouse)

  let handleBanana = (e) => {
    let code = e.target.value
    setBanana(code)
    localStorage.setItem("banana", code)
  }

  let allGuestCall = async () => {
    let guestData = await axios(`https://salty-taiga-76954.herokuapp.com/households/${banana}/guests`)
    setAllGuests(guestData.data)

  }

  let handleGuests = () => {
    setCurrentHouse(households[banana - 1])
    allGuestCall()
    setToMain(true)
  }

  return <>
    {toMain ? <Redirect to={`/household/${banana}`} /> : null}
    <div>
      <h1>access code</h1>
      <form onSubmit={() => handleGuests()}>
        <input type="text" onChange={e => handleBanana(e)} />
        <input type="submit" />
      </form>
    </div>
  </>
}


// () => setToMain(true)