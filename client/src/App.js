import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import api from './services/apiconfig'
import Header from './components/shared/Header'
import Main from './components/views/Main'

export default function App() {

  return <>
    <Header />
    <Main />
  </>
}
