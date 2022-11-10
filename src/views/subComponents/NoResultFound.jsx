import React from "react";

const NoResultFound = () =>{
  return(
    <div style={styles.empty}>
      No Results Found!!!
    </div>
  )
}

export default NoResultFound;

const styles={
  empty:{
    fontSize:"24px",
    textAlign:"center",
    color:"#ff0000"
  }
}
