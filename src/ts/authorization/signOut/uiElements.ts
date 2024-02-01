type TypeSignOutElements = {
	button: HTMLButtonElement;
};

const signOutElements: TypeSignOutElements = {
	button: document.querySelector('#sign-out')!,
};

export {signOutElements, type TypeSignOutElements};
