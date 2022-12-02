import axios from "axios";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
// export const ACTIVITY = 'ACTIVITY';

// export function fetchStart() {
//     return {
//        type: FETCH_START,
//     };
//  }
//  export function fetchDone(users, event, artikel) {
//     return {
//        type: FETCH_DONE,
//        payload: {
//           users,
//           event,
//           artikel,
//        },
//     };
//  }

export const postSignUpSuccess = (user) => {
  return {
    type: SIGN_UP,
    user,
  };
};

export const postSignInSuccess = (user) => {
  return {
    type: SIGN_IN,
    user,
  };
};

// export const postActivity = (user) => {
//   return {
//     type: ACTIVITY,
//     user,
//   };
// };

export const signUp = (user) => {
  return async (dispatch) => {
    const response = await axios.post("https://be12-production.up.railway.app/signup", user);
    dispatch(postSignUpSuccess(response.data));
  };
};

export const signIn = (user) => {
  return async (dispatch) => {
    const response = await axios.post("https://be12-production.up.railway.app/signin", user);
    dispatch(postSignInSuccess(response.data));
  };
};

// export const Acivity = (user) => {
//     return async (dispatch) => {
//         const response = await axios.post('https://634c3a82acb391d34a818933.mockapi.io/artikel', user);
//         dispatch(postAcivitySuccess(response.data));
//     }
// }

// export function getData() {
//     return async (dispatch) => {
//        dispatch(fetchStart());
//        const articleList = await axios.get(
//           "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/artikel"
//        );

//        dispatch(fetchDone(userList.data, eventList.data, articleList.data));
//     };
//  }
