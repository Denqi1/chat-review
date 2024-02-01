import Cookies from 'js-cookie';

import {authorizationKey, userUrl} from '../authorization/signIn/consts';
import {settingsModalElements} from './uiElements';
import {getUserInfoRequest, makeChangeNameRequest} from './requests';
import {getUserUrl, userKey} from './consts';

async function setNameHandler(event: Event) {
	event.preventDefault();

	const newName = settingsModalElements.input.value;
	Cookies.set(userKey, newName);

	try {
		const token = Cookies.get(authorizationKey);
		await makeChangeNameRequest({name: newName}, userUrl, token);
		await getUserInfoRequest(getUserUrl, token);
	} catch (error) {
		console.error(error);
	}
}

function openSettingsModalHandler() {
	settingsModalElements.modal.showModal();
}

function closeSettingsModalHandler() {
	settingsModalElements.modal.close();
}

export {openSettingsModalHandler, closeSettingsModalHandler, setNameHandler};
