const persons = [{
        "name": "John Doe",
        "genre": "male",
        "age": 22,
        "nickname": "Spawn"
    },
    {
        "name": "Sara Doe",
        "genre": "female",
        "age": 26,
        "nickname": "Marvel"
    },
    {
        "name": "Peter Sun",
        "genre": "male",
        "age": 22,
        "nickname": "Nick Pit"
    },
    {
        "name": "Lara Croft",
        "genre": "female",
        "age": 19,
        "nickname": "Lara"
    },
    {
        "name": "Jovanni Bittorino",
        "genre": "male",
        "age": 41,
        "nickname": "Vitaly"
    }
]
const employees = []
const button = document.querySelector('#getuser')
const buttonUsers = document.querySelector('#showusers')
const input = document.querySelector('#user')
const userData = document.querySelector('#userdata')

class Person {
    constructor(person) {
        this.person = person
    }

    getPerson() {
        return `The person is ${this.name}, ${this.genre} and is ${this.age} years old.`
    }
}

//. Treating data
persons.forEach((person, index) => {
    const id = index + 1
    const p = Object.assign(person, {
        id
    })
    employees.push(new Person(p))
})

const getTemplate = () => {
    let template = ''
    const word = input.value.charAt(0).toUpperCase()
    const filtered = employees.filter((p) => p.person.name.includes(word))
    filtered.forEach((f) => {
        template += `<li> ${f.person.name}</li>`
    })
    userData.innerHTML = template
}

button.addEventListener('click', () => {
    if (input.value !== '') {
        getTemplate()
    }
})

input.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        getTemplate()
    }
})

input.addEventListener('keyup', (event) => {
    if (input.value !== '') {
        getTemplate()
    }
})

//. JS Events and user events
setTimeout(() => {
    //. -------------------------------------------------- Custom Events ---------
    const custom = new CustomEvent('create-contract', {
        detail: {
            name: 'Awesome Customers',
            empty: false,
            users: persons
        }
    })
    
    document.dispatchEvent(custom) 
     //. ---------------------------------------------  End ofCustom Events ---------
}, 1300);

buttonUsers.addEventListener('click', () => {
    document.addEventListener('create-contract', (event) => {
        console.log(event.detail);
     })    
})