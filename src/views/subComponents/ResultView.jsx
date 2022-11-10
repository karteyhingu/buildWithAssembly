import React from "react";

const ResultView = ({id, name, avatarUrl, type, profileUrl}) => {
  return (
      <div style={styles.card}>
        <img src={avatarUrl} alt="avatar" style={styles.avatar}/>
        <span>Id:{id}</span>
        <span>Name:{name}</span>
        <span>Type:{type}</span>
        <a href={profileUrl} style={styles.profileUrl} target="_blank">{profileUrl}</a>
      </div>
  )
}

export default ResultView

const styles = {
  card: {
    height: "250px",
    minWidth: "200px",
    borderRadius: "5px",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "#8a8f94",
    padding: "10px",
    borderColor: "#d8dde2",
    borderStyle: "solid",
    borderWidth: "1px",
    fontsize:"15px",
    margin:"20px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "3px"
  },
  profileUrl:{
    textDecoration:"none",
    cursor:"pointer",
  }
}
