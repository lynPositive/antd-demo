import '../reducers/numberReducer';

// export function setNumber (number){
//   console.log('[]]]]],ssss',number);
//   return dispatch =>{
//     dispatch(setNumber(number));
//   }
// }

export const setFunc = (number) =>{
  return {
    type:"setNumber",
    numberList: number
  }
}

export function  setNumber(params) {
  // console.log('[]]]]],ssss',params);
  return dispatch =>{
    dispatch(setFunc(params))
  }
}