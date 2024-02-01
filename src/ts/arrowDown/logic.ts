import Cookies from 'js-cookie';
import {arrowDown} from './uiElements';
import {type Message} from '../messageHistoryUpload/typeMessages';
import {userEmailKey} from '../consts';
import {sendMessageElements} from '../sendMessage/uiElements';

function enableOrDisableArrowDown(scrollPosition: number, maxScrollHeight: number) {
	enabledArrowDown(scrollPosition, maxScrollHeight);
	diasabledArrowDown(scrollPosition, maxScrollHeight);
}

function enabledArrowDown(scrollPosition: number, maxScrollHeight: number) {
	const enableArrow = maxScrollHeight - 1500 >= scrollPosition && maxScrollHeight - 1600 <= scrollPosition;
	if (enableArrow) {
		arrowDown?.classList.remove('none');
	}
}

function diasabledArrowDown(scrollPosition: number, maxScrollHeight: number) {
	const disableArrow = maxScrollHeight - 1500 <= scrollPosition && maxScrollHeight - 1400 >= scrollPosition;
	if (disableArrow) {
		arrowDown?.classList.add('none');
	}
}

function scrollDown(message: Message) {
	const yourEmail = Cookies.get(userEmailKey);

	if (sendMessageElements.templateRoot.scrollTop + 1000 > sendMessageElements.templateRoot.scrollHeight || message.user.email === yourEmail) {
		sendMessageElements.templateRoot.scrollTop = sendMessageElements.templateRoot.scrollHeight;
	}
}

export {enableOrDisableArrowDown, scrollDown};
