const {SHA256} = require('crypto-js');//This grabs the property (method) {SHA256} of the return result of require('crypto-js')
const jwt = require('jsonwebtoken')

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded)




/*
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
