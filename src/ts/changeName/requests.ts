import {type GetUserInfo} from '../authorization/signIn/types';
import {type NewName} from './types';

async function makeChangeNameRequest(newName: NewName, url: string, token: string | undefined) {
	const response = await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(newName),
	});
	return response.json();
}

async function getUserInfoRequest(getUrl: string, token: string | undefined): Promise<GetUserInfo> {
	const response = await fetch(getUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		},
	});

	return await response.json() as Promise<GetUserInfo>;
}

export {makeChangeNameRequest, getUserInfoRequest};
