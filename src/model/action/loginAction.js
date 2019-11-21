import '../reducers/loginReducer'

export const loginFunc = (user) =>{
  console.log("action,action0000000000",user);
  return {
    type:"addLogin",
    user
  }
}

export function  login(params) {
  return dispatch =>{
    dispatch(loginFunc(params))
  }
}

// export function login (user){
//   return dispatch => {
//     dispatch(addLogin(user))
//   }
// }