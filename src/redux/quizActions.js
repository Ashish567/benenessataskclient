export const addAns = (data) => {
  console.log("add ans");
  console.log(data);
  return {
    type: "ADD_ANS",
    payload: data,
  };
};

export const submitAns = () => ({
  type: "SUBMIT_ANS",
});
