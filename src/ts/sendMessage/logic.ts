import {type TypeSendMessageElements} from './uiElements';

function createTemplateMessage(sendMessageElements: TypeSendMessageElements) {
	if (!sendMessageElements.templateRoot || !sendMessageElements.template) {
		throw new Error('Not found templateRoot or template');
	}

	const templateContent = sendMessageElements.template.content.cloneNode(true);
	sendMessageElements.templateRoot.prepend(templateContent);
	sendMessageElements.templateRoot.classList.add('chat-body-content__list');

	return templateContent;
}

function createLazyTemplateMessage(sendMessageElements: TypeSendMessageElements) {
	if (!sendMessageElements.templateRoot || !sendMessageElements.template) {
		throw new Error('Not found templateRoot or template');
	}

	const templateContent = sendMessageElements.template.content.cloneNode(true);
	sendMessageElements.templateRoot.append(templateContent);
	sendMessageElements.templateRoot.classList.add('chat-body-content__list');

	return templateContent;
}

export {createTemplateMessage, createLazyTemplateMessage};
