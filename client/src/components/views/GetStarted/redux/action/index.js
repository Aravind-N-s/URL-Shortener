import { authAxios } from "../../../../utils/axios";

export const startAddUser = () => {
  return dispatch => {
    authAxios
      .get("/user/account", {
        headers: {
          "Authorization": `JWT ${localStorage.getItem("userAuthToken")}`
        }
      })
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data.message);
        } else {
          dispatch(addUser(response.data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addUser = user => {
  return { type: "SET_USER", payload: user };
};

export const resetUser = () => {
  return { type: "RESET_USER" };
};
