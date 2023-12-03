import React from 'react'
import Popularsection from '../../components/Popularsection'
import Header from '../../components/Header'
import Projectsarea from '../../components/Projectsarea'
import Feature from '../../components/Features'
import Quality from '../../components/Quality'
import Myposts from '../../components/Myposts'
import Lastsection from '../../components/Lastsection'

function Home() {
  return (
    <div>
        <Header></Header>
        <Popularsection></Popularsection>
        <Projectsarea></Projectsarea>
        <Feature></Feature>
        <Quality></Quality>
        <Myposts></Myposts>
        <Lastsection></Lastsection>
        
    </div>
  )
}

export default Home