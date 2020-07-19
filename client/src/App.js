import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import api from './services/apiconfig'
import Header from './components/shared/Header'
import Main from './components/views/Main'

export default function App() {
  // States with all-data
  let [households, setHouseholds] = useState([])
  let [guests, setGuests] = useState([])
  let [orders, setOrders] = useState([])
  let [photos, setPhotos] = useState([])
  let [banana, setBanana] = useState(null)

  // states that change 
  let [currentHouse, setCurrentHouse] = useState(null)

  //redirects
  let [toMain, setToMain] = useState(false)

  let householdCall = async () => {
    // if (banana) {
    //   let householdData = await axios(`https://salty-taiga-76954.herokuapp.com/households/${parseInt(banana)}`)
    //   setHouseholds(householdData.data)
    // } else {
    let householdData = await axios(`https://salty-taiga-76954.herokuapp.com/households/`)
    setHouseholds(householdData.data)
    // }

  }

  let guestCall = async () => {
    let guestData = await axios('https://salty-taiga-76954.herokuapp.com/guests')
    setGuests(guestData.data)

  }

  // let orderCall = async () => {
  //   let orderData = await axios('https://salty-taiga-76954.herokuapp.com/orders')
  //   setOrders(orderData.data)

  // }

  let photoCall = async () => {
    let photoData = await axios('https://salty-taiga-76954.herokuapp.com/photos')
    setPhotos(photoData.data)

  }

  let checkAccess = async () => {
    let code = localStorage.getItem("banana")
    if (code) {
      let householdData = await axios(`https://salty-taiga-76954.herokuapp.com/households/`)
      console.log(householdData, "house data here")
      await setHouseholds(householdData.data)
      await setBanana(code)
      console.log("here", households, "code", code)
      setCurrentHouse(householdData.data[code - 1])
      setToMain(true)
    }
  }


  useEffect(() => {
    let allCalls = async () => {
      await checkAccess()
      // await householdCall()
      await guestCall()
      // orderCall()
      await photoCall()


    }
    allCalls()

  }, [])

  return <>
    <Header
      setToMain={setToMain}
      households={households}
      setHouseholds={setHouseholds}
      banana={banana}
      currentHouse={currentHouse}
      setCurrentHouse={setCurrentHouse}
    />
    {/* might need a guard operator for householdData/household hook here */}
    <Main
      households={households}
      setHouseholds={setHouseholds}
      currentHouse={currentHouse}
      setCurrentHouse={setCurrentHouse}
      guests={guests}
      photos={photos}
      banana={banana}
      setBanana={setBanana}
      toMain={toMain}
      setToMain={setToMain} />

  </>
}
