const userUrl = 'https://edu.strada.one/api/user';
const authorizationKey = 'authorization';

const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const messageEmailIsInvalid = 'This email is not valid';
const messageEmailIsValid = 'The code was successfully sent!';

export {userUrl, authorizationKey, emailRegexp, messageEmailIsInvalid, messageEmailIsValid};
