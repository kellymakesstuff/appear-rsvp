import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import '../css/boilerplate.scss'

function AccessCode({
  households, setHouseholds,
  banana, setBanana,
  toMain, setToMain,
  currentHouse, setCurrentHouse,
  allGuests, setAllGuests }) {

  console.log("banana", banana, setCurrentHouse)
  // const [, forceUpdate] = useReducer(x => x + 1, 0);

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
    // forceUpdate()
    setToMain(true)
  }


  return <>
    {toMain ? <Redirect to={`/household/${banana}`} /> : null}
    <div className="inviteBox">
      <h1>Access your Invite</h1>
      <h2>Input the invite code found on your invitation</h2>
      <form onSubmit={() => handleGuests()}>
        <input type="text" placeholder="invite code" onChange={e => handleBanana(e)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  </>
}

export default withRouter(AccessCode)
