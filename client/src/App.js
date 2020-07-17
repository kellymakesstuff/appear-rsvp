import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import api from './services/apiconfig'
import Header from './components/shared/Header'
import Main from './components/views/Main'

export default function App() {

  let [households, setHouseholds] = useState([])
  let [guests, setGuests] = useState([])
  let [orders, setOrders] = useState([])
  let [photos, setPhotos] = useState([])
  let [access, setAccess] = useState("")

  let householdCall = async () => {
    let householdData = await axios('https://salty-taiga-76954.herokuapp.com/households')
    setHouseholds(householdData.data)

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



  useEffect(() => {
    householdCall()
    guestCall()
    // orderCall()
    photoCall()
  }, [])

  return <>
    <h1>in App</h1>
    <Header />
    {/* might need a guard operator for householdData/household hook here */}
    <Main
      households={households}
      guests={guests}
      photos={photos}
      access={access} />

  </>
}
