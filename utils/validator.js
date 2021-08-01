module.exports.validateRegisterInput = (
	username,
	email,
	password,
	confirmPassword,
) => {
	const errors = {};
	if (username.trim() === '') {
		errors.username = 'Username must not be empty';
	}
	if (email.trim() === '') {
		errors.email = 'Username must not be empty';
	} else {
		const regEx = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
	}
}
