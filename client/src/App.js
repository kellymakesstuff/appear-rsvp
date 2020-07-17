import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import api from './services/apiconfig'
import Header from './components/shared/Header'
import Main from './components/views/Main'

export default function App() {

  let [households, setHouseholds] = useState([])

  let apiCall = async () => {
    let householdData = await axios('https://salty-taiga-76954.herokuapp.com/households')

    setHouseholds(householdData.data)
    console.log(households)
  }

  useEffect(() => {
    apiCall()
  }, [])

  return <>
    <h1>in App</h1>
    <Header />
    {/* might need a guard operator for householdData/household hook here */}
    <Main />
  </>
}
