import {type SettingsModalElements} from './types';

const settingsModalElements: SettingsModalElements = {
	modal: document.querySelector('#settings-popup')!,
	input: document.querySelector('.settings__item-form-input')!,
	setButton: document.querySelector('.settings__item-form-button')!,
	closeButton: document.querySelector('#settings-popup-close-button')!,
	openButton: document.querySelector('#settings-popup-open-button')!,
};

export {settingsModalElements};
