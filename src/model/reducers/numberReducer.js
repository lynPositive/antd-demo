let number = 0;

function numberReducer(state=number,action){
  // console.log('numberReducernumberReducernumberReducer',action);
  
  switch(action.type){
    case 'setNumber':
      return {numberLists:action.numberList};
    default:
      return state;
  }
}

export default numberReducer;