import React, { useState, useEffect, useRouteMatch } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import '../src/components/css/boilerplate.scss';
import axios from 'axios'
import api from './services/apiconfig'
import Header from './components/shared/Header'
import Main from './components/views/Main'


function App({ match }) {
  // States with all-data
  let [households, setHouseholds] = useState([])
  let [allGuests, setAllGuests] = useState([])
  let [orders, setOrders] = useState([])
  let [photos, setPhotos] = useState([])
  let [banana, setBanana] = useState(null)

  // states that change 
  let [currentHouse, setCurrentHouse] = useState(null)

  //redirects
  let [toMain, setToMain] = useState(false)
  let [isLoading, setIsLoading] = useState(false)

  let householdCall = async () => {
    // if (banana) {
    //   let householdData = await axios(`https://salty-taiga-76954.herokuapp.com/households/${parseInt(banana)}`)
    //   setHouseholds(householdData.data)
    // } else {
    let householdData = await axios(`https://salty-taiga-76954.herokuapp.com/households/`)
    setHouseholds(householdData.data)
    // }

  }

  let allGuestCall = async () => {
    let guestData = await axios(`https://salty-taiga-76954.herokuapp.com/households/${match.params.banana}/guests`)
    setAllGuests(guestData.data)

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
    let paramSet = match.params.banana
    if (paramSet) {
      await setBanana(paramSet)
      let householdData = await axios(`https://salty-taiga-76954.herokuapp.com/households/`)
      setHouseholds(householdData.data)
      await setCurrentHouse(householdData.data[paramSet - 1])
    } else if (!paramSet && code) {
      await setBanana(code)
      let householdData = await axios(`https://salty-taiga-76954.herokuapp.com/households/`)
      setHouseholds(householdData.data)
      await setCurrentHouse(householdData.data[code - 1])
    }
  }


  useEffect(() => {
    let allCalls = async () => {
      await photoCall()
      await checkAccess()
      await householdCall()
      // allGuestCall()
      // await guestCall()
      // orderCall()
    }
    // setIsLoading(true)
    allCalls()
    // setIsLoading(false)

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
      allGuests={allGuests}
      setAllGuests={setAllGuests}
      photos={photos}
      setPhotos={setPhotos}
      banana={banana}
      setBanana={setBanana}
      toMain={toMain}
      setToMain={setToMain}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      match={match}
    />



  </>
}

export default withRouter(App)