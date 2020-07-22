import React from 'react'
import { Link, Route } from 'react-router-dom'
import HeadCut from '../images/appear_header_cut_high.png'
import { withRouter } from 'react-router-dom'
import '../css/header.scss'


function Header({ setToMain, banana, currentHouse, setCurrentHouse }) {

  console.log("currentHouse in Header", currentHouse, setCurrentHouse)

  return <>
    <div className="headerBox">
      <div className="headerImgBox">

        <Link to="/" exact><img className="headerImg" src={HeadCut} alt="APPEAR" /></Link>

      </div>
      <div className="headerLinks">
        <Link to="/accesscode" onClick={() => setToMain(false)}>Access your Invite</Link>
        {currentHouse && <Link to={`/household/${banana}`}> || Welcome, {currentHouse.surname} family</Link>}
        {currentHouse && <Link to="/addphoto"> || Add Photos</Link>}
      </div>

    </div>
  </>
}

export default withRouter(Header)