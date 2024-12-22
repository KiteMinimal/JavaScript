const accountId = 12345678
let accountEmail = 'shoyeb@example.com'
var accountPassword = '12345'
accountCity = 'Jaipur'
let accountDetails;

/*
prefer not to use var
because of the issue in the block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountDetails])