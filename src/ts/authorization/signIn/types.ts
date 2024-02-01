import {type SettingsModalElements} from '../../changeName/types';
import {type Message} from '../../messageHistoryUpload/typeMessages';
import {type TypeSendMessageElements} from '../../sendMessage/uiElements';
import {type TypeSignOutElements} from '../signOut/uiElements';

type PostData = {
	email: string;
};

type GetUserInfo = {
	email: string;
	name: string;
	token: string;
	__v: number;
	_id: string;
	message?: string;
};

type AuthorizationElements = {
	modal: HTMLDialogElement;
	modalInput: HTMLInputElement;
	modalButtonGet: HTMLButtonElement;
	modalButtonEnter: HTMLButtonElement;
	modalInputValidation: HTMLParagraphElement;
};

type AuthorizationConfirmElements = {
	modal: HTMLDialogElement;
	modalInput: HTMLInputElement;
	modalButton: HTMLButtonElement;
	modalBackButton: HTMLButtonElement;
	modalValidationTokenResult: HTMLParagraphElement;
};

type CheckAuthorizationUser = {
	authorizationElements: AuthorizationElements;
	authorizationConfirmElements: AuthorizationConfirmElements;
	sendMessageElements: TypeSendMessageElements;
	settingsModalElements: SettingsModalElements;
	signOutElements: TypeSignOutElements;
};

type StartChatRoom = {
	token: string;
	sendMessageElements: TypeSendMessageElements;
	settingsModalElements: SettingsModalElements;
	signOutElements: TypeSignOutElements;
	messagesList: Message[];
};

export type {PostData, AuthorizationElements, AuthorizationConfirmElements, GetUserInfo, CheckAuthorizationUser, StartChatRoom};
