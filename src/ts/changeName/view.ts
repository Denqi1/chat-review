import {colon} from '../consts';

function changeName(newName: string, oldName: string) {
	const userNames = document.querySelectorAll('.user-name');

	userNames.forEach(name => {
		if (name.textContent === oldName) {
			name.textContent = newName + colon;
		}
	});
}

export {changeName};
