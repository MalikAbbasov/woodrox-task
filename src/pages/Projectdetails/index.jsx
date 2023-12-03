import React from "react";
import Headerpages from "../../components/Headerpages";
import Details from "../../components/Details";
function Projectdetails() {
  return (
    <div>
        <Headerpages pageName="Project Details" page="Project Details" pageLink="/project-details"></Headerpages>
        <Details></Details>
    </div>
  );
}

export default Projectdetails;
