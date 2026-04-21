let stream = "Arts";
let editIndex = null;

// Load from localStorage
function getData() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

// Save to localStorage
function saveData(data) {
    localStorage.setItem("students", JSON.stringify(data));
}

// Change stream
function setStream(s) {
    stream = s;
    document.getElementById("title").innerText = s;
    render();
}

// Add / Update student
const nameInput = document.getElementById("name");
const enrollInput = document.getElementById("enroll");
const marksInput = document.getElementById("marks");

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let data = getData();

    let student = {
        name: nameInput.value.trim(),
        enroll: enrollInput.value.trim(),
        marks: marksInput.value.trim(),
        stream: stream
    };

    if (!student.name || !student.enroll) {
        alert("Fill all fields properly");
        return;
    }

    if (data.some(s => s.enroll === student.enroll && editIndex === null)) {
        alert("Enrollment already exists!");
        return;
    }

    if (editIndex === null) {
        data.push(student);
    } else {
        data[editIndex] = student;
        editIndex = null;
    }

    saveData(data);
    this.reset();
    render();
});
// Render table
function render() {
    let data = getData();
    let filtered = data.filter(s => s.stream === stream);

    let rows = "";
    filtered.forEach((s, index) => {
        rows += `
        <tr>
            <td>${s.name}</td>
            <td>${s.enroll}</td>
            <td>${s.marks}</td>
            <td>
                <button onclick="edit(${index})">Edit</button>
                <button onclick="remove(${index})">Delete</button>
            </td>
        </tr>`;
    });

    document.getElementById("table").innerHTML = rows;
}

// Delete
function remove(index) {
    let data = getData();
    data.splice(index, 1);
    saveData(data);
    render();
}

// Edit
function edit(index) {
    let data = getData();
    let s = data[index];

    name.value = s.name;
    enroll.value = s.enroll;
    marks.value = s.marks;

    editIndex = index;
}

// Search
document.getElementById("search").addEventListener("input", function() {
    let val = this.value;
    let data = getData();

    let result = data.filter(s => s.enroll.includes(val));

    let rows = "";
    result.forEach((s) => {
        rows += `
        <tr>
            <td>${s.name}</td>
            <td>${s.enroll}</td>
            <td>${s.marks}</td>
            <td>${s.stream}</td>
        </tr>`;
    });

    document.getElementById("table").innerHTML = rows;
});

// Initial load
render();