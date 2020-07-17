import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import api from './services/apiconfig'
import Header from './components/shared/Header'
import Main from './components/views/Main'

export default function App() {

  let [households, setHouseholds] = useState([])

  let apiCall = async () => {
    let householdData = await axios(api)
    console.log(householdData)
  }

  useEffect(() => {
    apiCall()
  }, [])

  return <>
    <h1>in App</h1>
    <Header />
    <Main />
  </>
}
