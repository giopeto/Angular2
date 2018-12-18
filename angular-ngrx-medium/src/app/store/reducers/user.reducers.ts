import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (state = initialUserState, action: UserActions) : IUserState => {
	
	switch(action.type) {
		case: EUserActions.GetUSersSuccess: {
			return {
				...state,
				users: action.payload
			};
		}
		case: EUserActions.GetUSerSuccess: {
			return {
				...state,
				selectedUser: action.payload
			};
		}
		default:
		 return state;
	}
};