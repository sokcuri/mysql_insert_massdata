const faker = require('faker');
const moment = require('moment');
const monthTime = 1000 * 60 * 60 * 24 * 30;
const fs = require('fs');
function genFakeData() {
	let randomName = faker.name.findName();
	let date = new Date(Date.now() - Math.floor(Math.random() * monthTime));
	let dateStr = moment(date).format("YYYY-MM-DD HH:MM:SS");
	console.log(dateStr);
	console.log(randomName);
	console.log(`NULL, ${dateStr}, ${randomName}`);
	fs.appendFileSync('data.txt', `NULL,${dateStr},${randomName}\n`);
}

for (let i = 0; i < 2; i++) {
	genFakeData();
}
