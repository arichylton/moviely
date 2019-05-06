const INITIAL_STATE = {
	success: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GUEST_SIGN_IN':
			return { ...state, ...action.payload };
		case 'SIGN_OUT':
			return { ...state, success: false};
		default:
			return state;
	}
};
