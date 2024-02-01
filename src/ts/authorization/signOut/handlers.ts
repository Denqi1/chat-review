import Cookies from 'js-cookie';
import {authorizationKey} from '../signIn/consts';
import {authorizationElements} from '../signIn/uiElements';

function signOutHandler() {
	Cookies.remove(authorizationKey);
	authorizationElements.modal.showModal();
}

export {signOutHandler};
