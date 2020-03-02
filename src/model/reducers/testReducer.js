let numberTest = 0;

function testReducer(state=numberTest,action){  
  switch(action.type){
    case 'setNumberTest':
      return {numberTest:action.numberTest};
    default:
      return state;
  }
}

export default testReducer;