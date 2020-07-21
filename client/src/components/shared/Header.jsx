import React from 'react'
import { Link, Route } from 'react-router-dom'
import HeadCut from '../images/appear_header_cut_high.png'
import '../css/header.scss'


export default function Header({ setToMain, banana, currentHouse, setCurrentHouse }) {

  console.log("currentHouse in Header", currentHouse, setCurrentHouse)

  return <>

    <div className="headerBox">

      <img className="headerImg" src={HeadCut} alt="APPEAR" />


      <div className="headerLinks">
        <Link to="/accesscode" onClick={() => setToMain(false)}>Access Code</Link>
        {currentHouse && <Link to="/household" > || Welcome, {currentHouse.surname} family</Link>}
      </div>

    </div>
  </>
}
