const fs = require('fs');
const os = require('os')
const data = require('./data')
const crypto = require('crypto')

let value = os.userInfo()
let user = data("Prograd", 2020, "BE")
const password = crypto.createHmac('sha256', "secret").update('Prograd').digest('hex');

console.log(value);
console.log(user);
fs.writeFileSync('message.txt', 'Prograd Details\n')
fs.appendFileSync('message.txt', `\t\tUserId ->` + value.uid + `\n`)
fs.appendFileSync('message.txt', `\t\tName ->` + user.name + `\n`)
fs.appendFileSync('message.txt', `\t\tYear ->` + user.Year + `\n`)
fs.appendFileSync('message.txt', `\t\tQualification ->` + user.Qualification + `\n`)
fs.appendFileSync('message.txt', `\t\tUsername -> ` + value.username + ` \n`)
fs.appendFileSync('message.txt', `\t\tPassword -> ` + password + `\n`)

