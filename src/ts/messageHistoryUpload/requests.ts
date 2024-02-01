import {type Messages} from './typeMessages';

async function getHistoryMessagesRequest(historyUrl: string, token: string): Promise<Messages> {
	const response = await fetch(historyUrl, {
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Не удалось получить историю сообщений');
	}

	return response.json() as Promise<Messages>;
}

async function getHistoryMessages(historyUrl: string, token: string) {
	try {
		if (token) {
			const data = await getHistoryMessagesRequest(historyUrl, token);
			return data;
		}
	} catch (error) {
		console.error(error);
	}
}

export {getHistoryMessages, getHistoryMessagesRequest};
