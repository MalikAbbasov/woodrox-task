import React from 'react'
import Header from '../../components/Header'
import Projectsarea from '../../components/Projectsarea'
import Feature from '../../components/Features'
import Headerpages from '../../components/Headerpages'
import Newbrand from '../../components/Newbrand'
import Lastsection from '../../components/Lastsection'

function About() {
  return (
    <div>
        <Headerpages pageName="About Us" page="About" pageLink="/about"></Headerpages>
        <Newbrand></Newbrand>
        <Projectsarea></Projectsarea>
        <Feature></Feature>
        <Lastsection></Lastsection>
    </div>
  )
}

export default About