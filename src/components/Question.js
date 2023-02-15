import React from "react";

import {
  useCallback,
  useState,
  useRef,
  useEffect,
  useConquestion,
} from "react";
import { connect } from "react-redux";
import { addAns } from "../redux/quizActions";

function Question(props) {
  const { question, _id } = props.val;
  console.log(props.val.answers);
  const optStyle = {
    padding: "5px",
  };
  return (
    <div>
      <div>
        <h5>{question}</h5>
        <div className="container">
          <div
            onClick={() => {
              const tmp = {};
              tmp[_id] = props.val.answers.answer_a;
              props.addAns(tmp);
            }}
            style={{
              backgroundColor: "bisque",
            }}
            className="item"
          >
            <div style={optStyle}>A. {props.val.answers.answer_a}</div>
          </div>
          <div
            onClick={() => {
              console.log("clicked b");
              const tmp = {};
              tmp[_id] = props.val.answers.answer_b;
              props.addAns(tmp);
            }}
            style={{
              backgroundColor: "bisque",
            }}
            className="item"
          >
            <div style={optStyle}>B. {props.val.answers.answer_b}</div>
          </div>
          <div
            onClick={() => {
              console.log("clicked c");
              const tmp = {};
              tmp[_id] = props.val.answers.answer_c;
              props.addAns(tmp);
            }}
            style={{
              backgroundColor: "bisque",
            }}
            className="item"
          >
            <div style={optStyle}>C. {props.val.answers.answer_c}</div>
          </div>
          <div
            onClick={() => {
              console.log("clicked d");
              const tmp = {};
              tmp[_id] = props.val.answers.answer_d;
              props.addAns(tmp);
            }}
            style={{
              backgroundColor: "bisque",
            }}
            className="item"
          >
            <div style={optStyle}>D. {props.val.answers.answer_d}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
const actionCreators = {
  addAns,
};
function mapStateToProps(state) {
  return {
    ans: state.quiz,
  };
}
export default connect(mapStateToProps, actionCreators)(Question);
