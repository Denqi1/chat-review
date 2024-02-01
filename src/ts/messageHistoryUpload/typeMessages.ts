import {type TypeSendMessageElements} from '../sendMessage/uiElements';

type Messages = {
	messages: Message[];
};

type Message = {
	_id: string;
	text: string;
	user: User;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
};

type User = {
	email: string;
	name: string;
};

type ChangeTemplateMessage = {
	template: Template;
	userName: string;
	userMessage: string;
	time: string;
	userEmail: string;
};

type Template = {
	item: Element | undefined;
	name: Element | undefined;
	message: Element | undefined;
	time: Element | undefined;
};

type CreateOneMessage = {
	message: Message;
	createTemplateMessage: (sendMessageElements: TypeSendMessageElements) => Node;
	sendMessageElements: TypeSendMessageElements;
};

export type {Messages, Message, ChangeTemplateMessage, Template, CreateOneMessage};
