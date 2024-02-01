import {emptyValue} from '../consts';
import {sendMessageElements} from '../sendMessage/uiElements';
import {arrowDown} from './uiElements';
import {keyCountUnreadMessage} from './unreadMessages/consts';
import {unreadMessage} from './unreadMessages/uiElements';

function arrowDownHandler() {
	sendMessageElements.templateRoot.scrollTop = sendMessageElements.templateRoot.scrollHeight;
	arrowDown?.classList.add('none');

	if (!unreadMessage) {
		throw new Error('not found unread message element');
	}

	unreadMessage.textContent = emptyValue;
	setTimeout(() => {
		localStorage.removeItem(keyCountUnreadMessage);
	});
}

export {arrowDownHandler};
