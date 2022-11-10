import React, {useState} from "react";
import API from "../../http/apiService"
import ResultView from "../subComponents/ResultView"
import Form from "../subComponents/Form";
import ClipLoader from "react-spinners/ClipLoader";
import NoResultFound from "../subComponents/NoResultFound";
import Error from "../subComponents/Error";
import {Constants} from "../../constant";

const Dashboard = () => {
  const [searchString, setSearchString] = useState("");
  const [selectedOptionString, setSelectedOptionString] = useState(Constants.RadioOption.USERS);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isEmptyResult, setIsEmptyResult] = useState(false)

  const onChangeInputText = (event) => {
    setSearchString(event.target.value)
  }

  const onChangeRadioOptionValue = (event) => {
    setSelectedOptionString(event.target.value);
  }

  const handleSearch = async () => {
    setIsLoading(true)
    setIsEmptyResult(false);
    switch (selectedOptionString) {
      case Constants.RadioOption.USERS:
        try {
          const res = await API.User.getUser(searchString);
          if (res?.items?.length <= 0) {
            setIsEmptyResult(true);
            setIsLoading(false);
          } else {
            setResult(res.items);
          }
        } catch (error) {
          setIsError(true)
        }
        setIsLoading(false);
        break;
      case Constants.RadioOption.ORG:
        try {
          const res = await API.Organisation.getOrganisation(searchString)
          if (res?.items?.length <= 0) {
            setIsEmptyResult(true);
            setIsLoading(false)
            return;
          } else {
            setResult(res.items)
          }
        } catch (error) {
          setIsError(true)
        }
        setIsLoading(false)
        break;
      default:
        setResult([]);
        break;
    }
  }
  return (
    <div className="container" style={styles.container}>
      <div className="form-container">
        <Form onChangeInputText={onChangeInputText} onChangeRadioOptionValue={onChangeRadioOptionValue} handleSearch={handleSearch}/>
      </div>
      <div style={styles.displayTitle}>Results will display here...</div>
      <ClipLoader
        color="#d66036d1"
        size={80}
        aria-label="Loading Spinner"
        loading={isLoading}
        cssOverride={{margin:"0 auto"}}
      />
      <div className="result-view-container" style={styles.resultViewContainer}>
        {isError ?
          <Error/>
          : (isEmptyResult ? <NoResultFound/> :
            result.map(item => {
              return <ResultView key={item.id} id={item.id} name={item.login} type={item.type}
                                 avatarUrl={item.avatar_url} profileUrl={item.html_url}/>
            }))
        }
      </div>
    </div>
  )
}

export default Dashboard;

const styles = {
  container: {
    display: "flex",
    flexDirection: "Column",
    padding: "20px"
  },
  displayTitle: {
    fontsize: "20px"
  },
  resultViewContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    borderColor: "#d8dde2",
    borderStyle: "solid",
    borderWidth: "1px",
  }
}
