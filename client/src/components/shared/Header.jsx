import React from 'react'
import { Link, Route } from 'react-router-dom'
import { HeadCut } from '../images/appear_header_cut_high.png'
import '../css/header.scss'


export default function Header({ setToMain }) {


  return <>

    <Link to="/accesscode" onClick={() => setToMain(false)}>Access Code</Link>

  </>
}
