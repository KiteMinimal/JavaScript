// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise One Resolved");
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("PromiseOne");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise two is resolved");
//   }, 1000);
// }).then((response) => {
//   console.log(response);
//   console.log("PromiseTwo");
// });

// const promiseThree = new Promise(function(resolve, reject) {
//     const error = false
//     setTimeout(() => {
//         if(!error){
//         resolve({message: "Promise Three is resolve"})
//         }
//         else{
//             reject({message:"something went wrong"})
//         }
//     },1000)
// })

// promiseThree.then((response) => {
//     console.log(response)
// }).catch((err) => {
//     console.log(err)
// })

// const promiseFour = new Promise(function(resolve, reject) {
//     const error = false
//     setTimeout(() => {
//         if(!error){
//             resolve({username: "KiteMinimal", email: "kiteminimal@example.com"})
//         }else{
//             reject('something went wrong')
//         }
//     },2000)
// })

// promiseFour.then((response) => {
//     console.log(response)
//     return response.username
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// }).finally(()=> {
//     console.log("Either promise is resolved or rejected")
// })

// const promiseFive = new Promise(function (resolve, reject) {
//   let err = false;
//   setTimeout(() => {
//     if (!err) {
//       resolve({ username: "Mohammad Shoyeb", email: "mohdshoyeb@example.com" });
//     } else {
//       reject("something went wrong");
//     }
//   }, 1000);
// });

// async function resolvePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response.email);
//   } catch (error) {
//     console.log(error);
//   }
// }

// resolvePromiseFive();

// const promiseSix = new Promise(function(res, rej) {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     res("get", url)
// })

// async function responseHandler() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error: ", error);
//   }
// }

// const  userData =  responseHandler();
// console.log( userData);

const username = "chaiOrCode"

String.prototype.findLength = function(){
    console.log(`${this}`)
    console.log(`lenght of string: ${this.trim().length}`)
}

// username.findLength()
"Shoyeb".findLength()
"kiteminimal           ".findLength()