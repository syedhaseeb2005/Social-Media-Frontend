import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Feed from '../../component/Feed/Feed'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='homeContainer'>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </div>
  )
}

export default Home
