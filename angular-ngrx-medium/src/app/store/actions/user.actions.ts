import { Action } from '@ngrx/store';

import { IUser } from '../../models/user.interface';

export enum EUserActions {
	GetUSers = '[User] Get Users',
	GetUSersSuccess = '[User] Get Users Success',
	GetUSer = '[User] Get User',
	GetUSerSuccess = '[User] Get User Success'
}

export class GetUsers implement Action {
	public readonly type = EUserActions.GetUsers;
}

export class GetUSersSuccess implement Action {
	public readonly type = EUserActions.GetUSersSuccess;
	constructor(public payload: IUser[]) {}
}

export class GetUSer implement Action {
	public readonly type = EUserActions.GetUSer;
	constructor(public payload: number) {}
}

export class GetUSerSuccess implement Action {
	public readonly type = EUserActions.GetUSerSuccess;
	constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;