import Cookies from 'js-cookie';
import {authorizationKey} from '../authorization/signIn/consts';

const token = Cookies.get(authorizationKey);
const urlWebSocket = 'wss://edu.strada.one/websockets?';

const webSocket = new WebSocket(`${urlWebSocket}${token}`);

export {urlWebSocket, webSocket};
