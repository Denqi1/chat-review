import {errorMessages} from './consts';

class NotFoundElement extends Error {
	constructor(element: string) {
		super(element + errorMessages.elementNotFound);
		this.name = 'NotFoundElement';
	}
}

export {NotFoundElement};
