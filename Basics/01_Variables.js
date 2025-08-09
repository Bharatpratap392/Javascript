//what ever written in constant is not ever going to changed it just prints directly and what ever written in "let" or "var" can be changed
const accountId = 144553
let accountEmail = "BHARAT@GMAIL.COM" 
var accountPassword = "12345"
accountCity = "GWALIOR" 
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);//it's good when we want to get few instruction 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])//it's good when we want to implement multiple things 
// at once we use table[put your all values]