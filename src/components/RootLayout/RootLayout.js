import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import {Provider} from  'react-redux'
import store from '../../components/store/store'
const RootLayout = () => {
  return (
         
        <Provider store={store}>
            <div>
           <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
        </Provider>
    
  )
}

export default RootLayout
