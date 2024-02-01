import {type AuthorizationConfirmElements, type AuthorizationElements} from './types';

const authorizationElements: AuthorizationElements = {
	modal: document.querySelector('#authorization-popup')!,
	modalInput: document.querySelector('.authorization-popup__input')!,
	modalButtonGet: document.querySelector('#authorization-popup-button-getcode')!,
	modalButtonEnter: document.querySelector('#authorization-popup-button-entercode')!,
	modalInputValidation: document.querySelector('#validation-input-result')!,
};

const authorizationConfirmElements: AuthorizationConfirmElements = {
	modal: document.querySelector('#authorization-confirm-popup')!,
	modalInput: document.querySelector('.authorization-confirm-popup__input')!,
	modalButton: document.querySelector('.authorization-confirm-popup__button')!,
	modalBackButton: document.querySelector('#authorization-confirm-popup-close-button')!,
	modalValidationTokenResult: document.querySelector('#validation-token-result')!,
};

export {authorizationElements, authorizationConfirmElements};
