import {authorizationElements} from './uiElements';
import {authorizationGetHandler} from './handlers';

function closeAuthorizationModal() {
	if (authorizationElements.modal === null) {
		throw new Error('not found button get code');
	}

	authorizationElements.modal.removeEventListener('click', authorizationGetHandler);
	authorizationElements.modal.close();
}

export {closeAuthorizationModal};
