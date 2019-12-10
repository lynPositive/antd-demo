
let user = {};

function LoginReducer(state=user,action){
	//console.log('LoginReducer,LoginReducer',action.type);
	switch(action.type){
		case 'addLogin':
			return {user:action.asd};
		default:
			return state;
	}
}

export default LoginReducer;                                                                                  