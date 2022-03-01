const header = document.getElementById('header')
const title = document.getElementById('title')
const user = {
    firstName: 'Ibrahim',
    lastName: 'Sharif',
    bod: '16/8/1999'
}
header.innerHTML = `
<h1>Welcome Mrs.${user.firstName} ${user.lastName} </h1>

<h2> your birth date in our database is ${user.bod} </h2>
`