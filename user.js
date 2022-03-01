class School{
    constructor(address, type, name){
        this.address = address
        this.type = type 
        this.name = name
        this.grades = {}
        this.students = []
        this.teachers = []
    }
    registerStudent(firstName, lastName, userNme, password, age, gender, tuition, grade){
        const student = new Student(firstName, lastName, userNme, password, age, gender, tuition, grade) 
        this.students.push(student)
    }
    hireTeacher(firstName, lastName, userNme, password, age, salary ,subject){
        const teacher = new Teacher(firstName, lastName, userNme, password, age, salary ,subject)
        this.teachers.push(teacher)

    }
    signin(userName,password){
        const teachers = this.teacher.find(t => t.userName == userName)
        const students = this.student.find(s => s.userName == userName)
    if (teacher) {
        return teacher.signIn(password)
    }
    if (student) {
        return student.signIn(password)
    }
    return{err: true, msg:'connat find user'}
    }
    
} 

class User{
    constructor(firstName, lastName, userNme, password, age, gender){
        this.firstName = firstName
        this.lastName = lastName
        this.userNme = userNme
        this.password = password
        this.age = age 
        this.gender = gender
        this.isLoggedIn = false
        this.isAchtive = true
        this.lastLoggedIn = 0
    }
    signIn(){
        if (this.isAchtive) {
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now()
            return this
        }else{
            alert('this shit has been deleted')
        }
    }
    signOut(){
        this.isLoggedIn = false
    }
    gitLastLogInDate(){
        const date = new Date(this.lastLoggedIn)
        return date.toLocaleTimeString() 
    }
    deactivateUser(){
        this.isAchtive = false
    }
    reactivate(){
        this.isAchtive = true
        alert('Welcome Back babeee '+ this.firstName)
    }

}

class Student extends User{
    constructor(firstName, lastName, userNme, password, age, gender, tuition, grade){
        super(firstName, lastName, userNme, password, age, gender)
        this.tuition = tuition
        this.grade = grade
    }
}

class Teacher extends User{
    constructor(firstName, lastName, userNme, password, age, salary ,subject) {
        super(firstName, lastName, userNme, password, age,)
        this.salary = salary
        this.subject =subject
    }
}

const school = new School('jerusalem', 'high-school', 'IBschools')

school.registerStudent('ibrahim', 'sharif', '@pobbda', 'wordpass123', 18, 'M', '1278$', '12th')
school.hireTeacher('ahmad', 'kaws', '@ahmkaswami', 'password123', 30, '9000$', 'money' )

console.log(school);