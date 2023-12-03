import React from 'react'
import Contactsect from '../../components/Contactsect'
import Headerpages from '../../components/Headerpages'

function Contact() {
  return (
    <div>
        <Headerpages pageName="Contact" page="Contact" pageLink="/contact"></Headerpages>
        <Contactsect></Contactsect>
    </div>
  )
}

export default Contact