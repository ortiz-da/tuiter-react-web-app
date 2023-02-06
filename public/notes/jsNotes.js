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


console.log(jQuery)

const hello234 = jQuery("#calc")
// hello234.css('color', 'green')
hello234.css('background-color', 'yellow')

hello234.css(
    {
        'color:': 'green',
        'background-color': 'orange'
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