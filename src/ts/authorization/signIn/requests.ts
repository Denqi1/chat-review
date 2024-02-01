import {type PostData} from './types';

async function makeAuthorizationRequest(postData: PostData, url: string) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(postData),
	});

	return response.json();
}

export {makeAuthorizationRequest};
