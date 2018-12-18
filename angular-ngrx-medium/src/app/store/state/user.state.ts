import {IUser} from '../../models/user.interface';

export interface IUserState {

	user: IUser[];
	selectedUser: Iuser;
}

export const initialUserState: IUserState = {
	user: null,
	selectedUser: null
};