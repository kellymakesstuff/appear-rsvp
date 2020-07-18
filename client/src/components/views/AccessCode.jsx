import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

export default function AccessCode({ banana, setBanana, toMain, setToMain }) {

  console.log("banana", banana)


  return <>
    {toMain ? <Redirect to="/" /> : null}
    <div>
      <h1>access code</h1>
      <form onSubmit={() => setToMain(true)}>
        <input type="text" onChange={e => setBanana(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  </>
}
