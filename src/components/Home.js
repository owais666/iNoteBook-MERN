import React from "react";
import Notes from "./Notes";


function Home(props) {
// const {showAlert} = props.showAlert
  return (
    <div>
    
      <Notes showAlert={props.showAlert} />
    </div>
  );
}

export default Home;
