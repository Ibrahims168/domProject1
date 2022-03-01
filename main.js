const header = document.getElementById('header')
const title = document.getElementById('title')
const userNameInput = document.getElementById('userNameInput')
const passwordInput = document.getElementById('passwordInput')
const signInBtn = document.getElementById('signInBtn')
const mainContainer = document.getElementById('mainContainer')

const renderUser = function (user) {
    const firstName = document.createElement('h2')
    firstName.innerText = `first name: ${user.firstName}`
    const lastName = document.createElement('h2')
    firstName.innerText = `last name: ${user.lastName}`
    const lastLogIn = document.createElement('h2')
    lastLogIn.innerText=`last Login: ${user.getLastLOgIn()}`
    mainContainer.append(firstName,lastName,lastLogIn)
}


const submit = function () {
    const userName = userNameInput.value
    const password = passwordInput.value
    const user = school.signIn(userName,password)
    userNameInput.value = ''
    passwordInput.value = ''
    if(user.err) {
        alert(user.msg)
    }else{
        renderUser(user)
    }
} 
    signInBtn.addEventListener('click',submit)

// -------------------------------------------



// const user = {
//     firstName: 'Ibrahim',
//     lastName: 'Sharif',
//     bod: '16/8/1999'
// }
// header.innerHTML = `
// <h1>Welcome Mr.${user.firstName} ${user.lastName} </h1>

// <h2> your birth date in our database is ${user.bod} </h2>
// `


// const renderUser = function (firstName,lastName) {
//     header.innerHTML = `
//     <h1>Welcome Mr.${firstName} ${lastName} </h1>
//     `
    
// } 
