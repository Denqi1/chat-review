import {keyCountUnreadMessage} from './consts';
import {unreadMessage} from './uiElements';

function saveUnreadMessage() {
	const itemUser = document.querySelectorAll('.chat-body-content__item');
	const messageElement = itemUser[itemUser.length - 1];
	if (!messageElement) {
		throw new Error('not found last message');
	}

	if (!unreadMessage) {
		throw new Error('not found unreadMessage element');
	}

	const isUnreadMessage = messageInVisibleArea(messageElement);
	if (!isUnreadMessage) {
		return;
	}

	const count = localStorage.getItem(keyCountUnreadMessage);
	if (!count) {
		const newCount = 1;
		localStorage.setItem(keyCountUnreadMessage, JSON.stringify(newCount));
		messageElement.classList.add('unread');

		unreadMessage.textContent = String(newCount);
		return;
	}

	const newCount = Number(count) + 1;
	localStorage.setItem(keyCountUnreadMessage, JSON.stringify(newCount));
	messageElement.classList.add('unread');

	unreadMessage.textContent = String(newCount);
}

function removeUnreadMessage() {
	const unreadMessages = document.querySelectorAll('.unread');
	if (!unreadMessages.length) {
		return;
	}

	if (!unreadMessage) {
		throw new Error('not found unreadMessage element');
	}

	if (messageInVisibleArea(unreadMessages[0]!)) {
		return;
	}

	unreadMessages[0]?.classList.remove('unread');
	const count = localStorage.getItem(keyCountUnreadMessage);
	const newCount = Number(count) - 1;
	localStorage.setItem(keyCountUnreadMessage, JSON.stringify(newCount));
	unreadMessage.textContent = String(newCount);
}

function messageInVisibleArea(message: Element) {
	const messagePosition = message.getBoundingClientRect();
	const messagePostitionY = messagePosition.y;

	if (messagePostitionY > 800) {
		return true;
	}

	return false;
}

export {saveUnreadMessage, removeUnreadMessage, messageInVisibleArea};
