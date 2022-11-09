import fs from 'fs';

const acceptedFields = ['usr','eme','psw','age','loc','fll'];
const db = './challenge01/users.txt';

const users = fs.readFileSync(db, 'utf-8');
let validUserCount = 0;

const totalUsers = users.split(/\n\n/g);
console.log("totalUsers: ", totalUsers.length);

const isUserValid = (user) => {
	const userFields = user.replaceAll('\n', ' ').split(/\s+/);
	const userFieldsNames = userFields.map((field) => field.split(':')[0]);
	return acceptedFields.every((field) => userFieldsNames.includes(field));
};

const validUsers = totalUsers.filter((user) => {
	const isValid = isUserValid(user);
	if (isValid) validUserCount++;
	return isValid;
});

console.log("validUserCount: ", validUserCount);
console.log("validUser: ", validUsers[validUsers.length - 1]);
