import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

export default function AccessCode({
  households, setHouseholds,
  banana, setBanana,
  toMain, setToMain,
  currentHouse, setCurrentHouse }) {

  console.log("banana", banana, setCurrentHouse)

  let handleBanana = (e) => {
    let code = e.target.value
    setBanana(code)
    localStorage.setItem("banana", code)
  }

  return <>
    {toMain ? <Redirect to="/household" /> : null}
    <div>
      <h1>access code</h1>
      <form onSubmit={() => { setCurrentHouse(households[banana - 1]); setToMain(true) }}>
        <input type="text" onChange={e => handleBanana(e)} />
        <input type="submit" />
      </form>
    </div>
  </>
}


// () => setToMain(true)