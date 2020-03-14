import React, { useState, useEffect } from 'react';
import Home from './pages/Home'
import Loader from '../src/components/Loader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])


  if (loading){
    return <Loader/>
  }
  return <Home/>

}

export default App;
