import React from 'react'
import Headerpages from '../../components/Headerpages'
import Projectsarea from '../../components/Projectsarea'
import Projectsection from '../../components/Projectsection'

function Project() {
  return (
    <div>
        <Headerpages pageName="Projects" page="Project" pageLink="/project"></Headerpages>
        <Projectsection></Projectsection>
        <Projectsarea></Projectsarea>
    </div>
  )
}

export default Project