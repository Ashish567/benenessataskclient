import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useCallback, useState, useRef, useEffect, useContext } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";

function Puzzle(props) {
  const [quizData, setQuizData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}api/v1/quiz`, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        if ((response["status"] = "success")) {
          setQuizData(response["data"]);
        }
      })
      .catch(function ({ response }) {
        console.log(response);
      });
  }, []);
  function submitAnswers() {
    console.log(props.ans);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}api/v1/quiz`, {
        ans: props.ans,
      })
      .then((response) => {
        window.alert(
          "you have " + response["data"]["correctAns"] + " correct answers"
        );
      });
  }
  return (
    <div style={{ margin: "50px" }}>
      <p>Welcome to the quiz</p>
      {quizData.map((data, index) => {
        {
          // console.log(data);
        }
        return <Question key={index} val={data} />;
      })}
      <div className="btnCnt">
        <div className="btnSubmit" onClick={submitAnswers}>
          Submit Quiz
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    ans: state,
  };
}
export default connect(mapStateToProps, {})(Puzzle);
