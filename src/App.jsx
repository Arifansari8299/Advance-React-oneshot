import React from 'react'
import Navbar from "./components/Navbar";
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    // React fragement that is used to render the miltiple div and element at same level
    <>
    <Navbar/>
    <AppRoutes/>
    </>
  )
}

export default App