const {SHA256} = require('crypto-js');//This grabs the property (method) {SHA256} of the return result of require('crypto-js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
/*
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});*/

var hashedPassword = '$2a$10$NKqxH3Uq0nBd2Fes0QezLeCudY1xFkL5V7mk5nO3EjyYuDm42mFKC';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});




/*
var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded)





var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Before: ${message}`);
console.log(`After: ${hash}`);

var data = {
  id: 4
};

var token = {
  data, //equal to passing the data variable in a property named data
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}


token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();


var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if (resultHash === token.hash) {
  console.log('Data was not changed')
} else {
  console.log("Data was changed. Don't trust")
}
*/
