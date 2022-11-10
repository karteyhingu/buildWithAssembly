import React from "react";

const Error = () =>{
  return(
    <div style={styles.error}>
      Something went wrong !!!
    </div>
  )
}

export default Error;

const styles={
  error:{
    fontSize:"24px",
    textAlign:"center",
    color:"#ff0000"
  }
}
