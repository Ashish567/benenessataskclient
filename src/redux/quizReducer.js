const INITIAL_STATE = {
  quiz: {},
};

const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ANS":
      return { ...state, ...action.payload };

    case "UPDATE_ANS":
      return {
        ...state,
        ans: { ...state.ans, ...action.payload },
      };

    case "SUBMIT_ANS":
      return {
        ...state,
        ans: {},
      };
    default:
      return state;
  }
};

export default quizReducer;
