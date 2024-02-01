import Cookies from 'js-cookie';
import {keyLeftHistoryMessages} from '../messageHistoryUpload/consts';
import {renderHistoryMessages} from '../messageHistoryUpload/renderMessages';
import {type Message} from '../messageHistoryUpload/typeMessages';
import {createTemplateMessage} from '../sendMessage/logic';
import {sendMessageElements} from '../sendMessage/uiElements';
import {classNoneLogger, loggerElement} from './uiElemets';
import {enableOrDisableArrowDown} from '../arrowDown/logic';
import {removeUnreadMessage} from '../arrowDown/unreadMessages/logic';

function lazyLoadingMessage() {
	const scrollPosition = sendMessageElements.templateRoot.scrollTop;
	const maxScrollHeight = sendMessageElements.templateRoot.scrollHeight;

	enableOrDisableArrowDown(scrollPosition, maxScrollHeight);
	checkAllMessagesHaveBeenUpload(scrollPosition);
	renderLazyMessages(scrollPosition);
	removeUnreadMessage();
}

function checkAllMessagesHaveBeenUpload(scrollPosition: number) {
	if (scrollPosition === 0) {
		loggerElement?.classList.remove(classNoneLogger);
		return;
	}

	loggerElement?.classList.add(classNoneLogger);
}

function renderLazyMessages(scrollPosition: number) {
	const historyMessages = localStorage.getItem(keyLeftHistoryMessages);
	if (!historyMessages) {
		throw new Error('not found history messages');
	}

	if (scrollPosition > 110) {
		return;
	}

	renderHistoryMessages(createTemplateMessage, sendMessageElements, JSON.parse(historyMessages) as Message[]);
}

export {lazyLoadingMessage};
