import {authorizationConfirmElements, authorizationElements} from './uiElements';
import {makeAuthorizationRequest} from './requests';
import {authorizationKey, emailRegexp, messageEmailIsInvalid, messageEmailIsValid, userUrl} from './consts';
import {closeAuthorizationModal} from './view';
import {type PostData} from './types';
import Cookies from 'js-cookie';
import {isEmailValid, startChatRoom} from './logic';
import {getUserInfoRequest} from '../../changeName/requests';
import {getUserUrl} from '../../changeName/consts';
import {renderHistoryMessages} from '../../messageHistoryUpload/renderMessages';
import {createTemplateMessage} from '../../sendMessage/logic';
import {sendMessageElements} from '../../sendMessage/uiElements';
import {emptyValue, userEmailKey} from '../../consts';
import {historyUrl} from '../../messageHistoryUpload/consts';
import {getHistoryMessages} from '../../messageHistoryUpload/requests';
import {settingsModalElements} from '../../changeName/uiElements';
import {signOutElements} from '../signOut/uiElements';
import {StartChatRoom} from './types';

async function authorizationGetHandler(event: Event) {
	event.preventDefault();

	if (authorizationElements.modalButtonGet === null) {
		throw new Error('Кнопки получиь код не найдено');
	}

	const email = authorizationElements.modalInput.value;
	const postData: PostData = {
		email,
	};

	if (!isEmailValid(email, emailRegexp)) {
		authorizationElements.modalInput.classList.add('shake');

		setTimeout(() => {
			authorizationElements.modalInput.classList.remove('shake');
		}, 600);

		return;
	}

	authorizationElements.modalInputValidation.textContent = messageEmailIsValid;
	authorizationElements.modalInputValidation.classList.toggle('code-sent');

	try {
		await makeAuthorizationRequest(postData, userUrl);
	} catch (error) {
		console.error(error);
	}

	closeAuthorizationModal();
	authorizationConfirmElements.modal.showModal();

	authorizationElements.modalInputValidation.classList.toggle('code-sent');
}

function authorizationSetHandler(event: Event) {
	event.preventDefault();

	closeAuthorizationModal();
	authorizationConfirmElements.modal.showModal();

	if (authorizationConfirmElements.modalButton === null) {
		throw new Error('authorizationConfirmElements.modalButton такого элемента не найдено');
	}
}

async function authorizedConfirmHandler(event: Event) {
	event.preventDefault();

	const token = authorizationConfirmElements.modalInput.value.trim();

	try {
		const data = await getUserInfoRequest(getUserUrl, token);

		if (data.message === 'Authentication failed!') {
			throw new Error('Invalid token');
		}
	} catch (error) {
		authorizationConfirmElements.modalValidationTokenResult.textContent = 'Error: Invalid token!';

		authorizationConfirmElements.modalInput.classList.add('shake');
		setTimeout(() => {
			authorizationConfirmElements.modalInput.classList.remove('shake');
		}, 600);

		throw new Error('Invalid token');
	}

	Cookies.set(authorizationKey, token);

	authorizationConfirmElements.modal.close();

	const messages = await getHistoryMessages(historyUrl, token);
	const userInfo = await getUserInfoRequest(getUserUrl, token);

	const messagesList = messages?.messages;

	Cookies.set(userEmailKey, userInfo.email);

	if (!messagesList) {
		throw new Error('not found history messages');
	}

	startChatRoom({token, sendMessageElements, settingsModalElements, signOutElements, messagesList});
}

function authorizationConfirmBackHandler() {
	authorizationConfirmElements.modal.close();
	authorizationElements.modal.showModal();
}

function validationInputHandler() {
	if (authorizationElements.modalInputValidation === null) {
		throw new Error('not found authorizationElements.modalInputValidation');
	}

	if (isEmailValid(authorizationElements.modalInput.value, emailRegexp)) {
		authorizationElements.modalInputValidation.textContent = emptyValue;
	} else {
		authorizationElements.modalInputValidation.textContent = messageEmailIsInvalid;
	}
}

export {authorizationGetHandler, authorizationSetHandler, validationInputHandler, authorizationConfirmBackHandler, authorizedConfirmHandler};
