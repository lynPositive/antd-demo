
let user = {};

function LoginReducer(state=user,action){
	console.log('LoginReducer,LoginReducer',action);
	switch(action.type){
		case 'addLogin':
			return {user:action.user};
		default:
			return state;
	}
}

export default LoginReducer;                                                                                  