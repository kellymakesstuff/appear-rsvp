import React from 'react'
import { Link, Route } from 'react-router-dom'
import { HeadCut } from '../images/appear_header_cut_high.png'
import '../css/header.scss'


export default function Header({ setToMain, banana, currentHouse, setCurrentHouse }) {

  console.log("currentHouse in Header", currentHouse, setCurrentHouse)

  return <>

    <Link to="/accesscode" onClick={() => setToMain(false)}>Access Code</Link>
    {currentHouse && <Link to="/household">Welcome, {currentHouse.surname} family</Link>}
  </>
}
