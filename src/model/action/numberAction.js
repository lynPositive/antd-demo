import '../reducers/numberReducer';



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