class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword(){
        console.log(`${this.password}abc`)
        return 'encrypt';
    }

    capitalizedUserName(){
        console.log(`${this.username.toUpperCase()}`)
        return 'captial'
    }
}

const userCall = new User("kite", "kite@fb.com", "123")

console.log(userCall)
console.log(userCall.encryptedPassword())
const ep = userCall.encryptedPassword()
console.log(userCall.capitalizedUserName())
const cp = userCall.capitalizedUserName()

function User(username, email, password){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptedPassword = function(){
    return(`${this.password}.abc`)
}

User.prototype.capitalizedUserName = function(){
    return(`${this.username.toUpperCase()}`)
}

const detailUser = new User("kite", "kite@fb.com", "123")

console.log(detailUser)

console.log(detailUser.encryptedPassword())
console.log(detailUser.capitalizedUserName())


