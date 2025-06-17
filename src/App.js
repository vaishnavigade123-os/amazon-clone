import React, { useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Checkout from './Checkout'
import Footer from './Footer'


const App = () => {



  

        
  return (
    <Router>
      <div className='app'>
      <Header/>

        <Routes>
          <Route path='/checkout' element={<Checkout/>}>

          </Route>
          <Route path='/login' element={<Login/>}>

          </Route>
          <Route path='/' element={<Home/>} >

          </Route>


        </Routes>
        <Footer/>

      </div>
    </Router>
    
      
    
  )
}

export default App
