import '../reducers/loginReducer'

export const loginFunc = (user) =>{
  return {
    type:"addLogin",
    asd: user
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