const a = 12;
const b = 23;
const c = a + b;
// document.write("<h3>" + c + "</h3")
document.write(`<h3> ${a} + ${b} =  ${c} </h3>`)
// document.write(`<ul>`)


const house = {
    sqft: 1678,
    rooms: 4,
    baths: 3
}

const sqft = document.getElementById("sqft")
const rooms = document.getElementById("rooms")
const baths = document.getElementById("baths")

sqft.innerText = house.sqft
rooms.innerText = house.rooms
baths.innerText = house.baths

const students = [
    {
        name: "alice",
        grades: [90, 89, 97, 98, 100]
    },
    {
        name: "bob",
        grades: [87, 76, 56, 67, 78]
    },
    {
        name: "charlie",
        grades: [87, 76, 56, 67, 78]
    }
]

// using jquery
// $ is an alias for jQuery
const jlist = $("#jlist")
const sname = $("#sname")

for (let j = 0; j < students.length; j++) {
    const jli = jQuery(`<li>${students[j].name}</li>`);
    jlist.append(jli)
}

function addStudentFn() {
    // alert("add student")
    jlist.append(`<li>${sname.val()} </li>`)
}

const $addStudentButton = $("#addStudent")
// if you put addStudentFn() as param, it would call addStudentFn right away
$addStudentButton.click(addStudentFn)


// append puts things in the body of the element
jlist.append(alice)
jlist.append("<li>Bob</li>")
jlist.append("<li>Charlie</li>")



// using regular js
const list = document.getElementById("list")
let listItems = "";

// for (let i = 0; i < students.length; i++) {
//     listItems +=
//         `<li>
//             ${students[i].name}
//             ${students[i].grades}
//         </li>`
// }

listItems = students.map(
    item => `<li>${item.name} ${item.grades}</li>`
).join('')


// document.write(`</ul>`)
list.innerHTML = listItems

const hello123 = document.getElementById("hello")
hello123.style.color = "red"
hello123.innerHTML = "TEST123 <button>Button</button>"


// eslint-disable-next-line no-undef
console.log(jQuery)

// eslint-disable-next-line no-undef
const hello234 = jQuery("#calc")

// Can set values this way
hello234.css('color', 'green')
hello234.css('background-color', 'yellow')

// or with json
// In json, quotes are optional, unless you need to use a dash
// 'background-color' is the same as backgroundColor
hello234.css(
    {
        'color': 'white',
        backgroundColor: 'orange'
    })


function handleAddButton() {
    // alert('adding')
    const aInputField = document.getElementById("a")
    const bInputField = document.getElementById("b")
    const cInputField = document.getElementById("c")

    const aValue = parseInt(aInputField.value)
    const bValue = parseInt(bInputField.value)

    const cValue = add(aValue, bValue)
    cInputField.value = cValue

    console.log(aValue, bValue, cValue)

}

function add(a, b) {
    return a + b
}

function multiply(c, d) {
    return c * d
}

function divide(n, d) {
    return n / d
}

function totalArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = add(total, array[i])
    }
    return total
}

const aliceTotalGrades = totalArray(students[0].grades)
console.log(aliceTotalGrades)
const aliceAverage = divide(aliceTotalGrades, students[0].grades.length)
console.log(aliceAverage)