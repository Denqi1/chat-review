import Cookies from 'js-cookie';
import {colon, userEmailKey} from '../consts';
import {keyLeftHistoryMessages, maxCountMessages} from './consts';
import {type Template, type ChangeTemplateMessage, type Message} from './typeMessages';
import {type TypeSendMessageElements} from '../sendMessage/uiElements';
import {DateTime} from 'luxon';

function renderHistoryMessages(createTemplateMessage: (sendMessageElements: TypeSendMessageElements) => Node, sendMessageElements: TypeSendMessageElements, messagesList: Message[]) {
	const array = spliceAndSplitMessages(messagesList);

	array.toRenderMessages.forEach(message => {
		createOneMessage(createTemplateMessage, message, sendMessageElements, getTemplateMessage);
	});
}

function spliceAndSplitMessages(messagesList: Message[]) {
	const allHistoryMessages = messagesList.reverse();

	const leftHistoryMessages = allHistoryMessages.slice(0, allHistoryMessages.length - maxCountMessages);
	const toRenderMessages = allHistoryMessages.slice(allHistoryMessages.length - maxCountMessages);

	leftHistoryMessages.reverse();
	toRenderMessages.reverse();

	localStorage.setItem(keyLeftHistoryMessages, JSON.stringify(leftHistoryMessages));

	return {leftHistoryMessages, toRenderMessages, allHistoryMessages};
}

function createOneMessage(createTemplateMessage: (sendMessageElements: TypeSendMessageElements) => Node, message: Message, sendMessageElements: TypeSendMessageElements, getTemplateMessage: () => Template) {
	createTemplateMessage(sendMessageElements);
	const template = getTemplateMessage();

	const userMessage: ChangeTemplateMessage = {
		template,
		userName: message.user.name,
		userMessage: message.text,
		userEmail: message.user.email.toLowerCase(),
		time: DateTime.fromISO(String(message.createdAt)).toFormat('HH:mm'),
	};
	changeTemplateMessage(userMessage);
}

function getTemplateMessage(): Template {
	const itemUser = document.querySelectorAll('.chat-body-content__item');
	const names = document.querySelectorAll('.user-name');
	const messages = document.querySelectorAll('.chat-body-content__text');
	const times = document.querySelectorAll('.chat-body-content__time');

	const item = itemUser[0];
	const name = names[0];
	const message = messages[0];
	const time = times[0];

	return {item, name, message, time};
}

function getLazyTemplateMessage() {
	const itemUser = document.querySelectorAll('.chat-body-content__item');
	const names = document.querySelectorAll('.user-name');
	const messages = document.querySelectorAll('.chat-body-content__text');
	const times = document.querySelectorAll('.chat-body-content__time');

	const item = itemUser[itemUser.length - 1];
	const name = names[itemUser.length - 1];
	const message = messages[itemUser.length - 1];
	const time = times[itemUser.length - 1];

	return {item, name, message, time};
}

function changeTemplateMessage(message: ChangeTemplateMessage) {
	if (!message.template.name || !message.template.message || !message.template.time || !message.template.item) {
		throw new Error('not found message.template.name, message.template.message, message.template.time, message.template.item');
	}

	message.template.name.textContent = message.userName + colon;
	message.template.message.textContent = message.userMessage;
	message.template.time.textContent = message.time;

	const yourEmail = Cookies.get(userEmailKey)?.toLowerCase();
	if (message.userEmail === yourEmail) {
		message.template.item.classList.add('posted-by-me');
	}
}

export {renderHistoryMessages, createOneMessage, getLazyTemplateMessage};
