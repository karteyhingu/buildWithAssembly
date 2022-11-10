import React from "react";
import {Constants} from "../../constant";

const Form = ({onChangeInputText, onChangeRadioOptionValue, handleSearch}) => {
  return (
    <div style={styles.form}>
      <label style={styles.titleLabel}>GitHub Search Application </label>
      <input type="text" placeholder="Search user or organisation" style={styles.inputSearchText} onChange={onChangeInputText}/>
      <div style={styles.radioInput} onChange={onChangeRadioOptionValue}>
        <label style={styles.radioLabel}>Select one:</label>
        <input type="radio" value={Constants.RadioOption.USERS} name="searchOption" id={Constants.RadioOption.USERS} defaultChecked={true}/>
        <label for={Constants.RadioOption.USERS}>Users</label>
        <input type="radio" value={Constants.RadioOption.ORG} name="searchOption" id={Constants.RadioOption.ORG} />
        <label for={Constants.RadioOption.ORG}>Organisation</label>
      </div>
      <button
        style={styles.searchBtn}
        onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  )
}

export default Form;

const styles = {
  form:{
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    margin: "20px auto",
    width: "300px",
    height: "350px",
    borderColor: "#d8dde2",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "0 20px",
    borderRadius: "10px",
    background: "#f3f3f3"
  },
  titleLabel:{
    textAlign:"center",
    fontWeight:"bold"
  },
  inputSearchText: {
    height: "20px",
    borderWidth: "1px",
    borderColor: "#d8dde2",
    borderStyle: "solid",
    padding: "10px",
    borderRadius: "5px",
    outline: "none"
  },
  radioLabel:{
    marginRight:"5px"
  },
  radioInput: {
    display: "flex",
    flexDirection: "row"
  },
  searchBtn: {
    background: "#e86230cf",
    padding: "10px 20px",
    border: "none",
    color:"#ffffff",
    borderRadius:"5px",
    cursor:"pointer",
  }
}
