const header = document.getElementById('header')
const title = document.getElementById('title')
const user = {
    firstName: 'Ibrahim',
    lastName: 'Sharif',
    bod: '16/8/1999'
}
header.innerHTML = `
<h1>Welcome Mr.${user.firstName} ${user.lastName} </h1>

<h2> your birth date in our database is ${user.bod} </h2>
`


const renderUser = function (firstName,lastName) {
    header.innerHTML = `
    <h1>Welcome Mr.${firstName} ${lastName} </h1>
    `
    
}