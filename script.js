const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {

    // Create complex element (LI) with html
    const html = `
     <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    // Append created element to UL
    list.innerHTML += html;

}

addForm.addEventListener("submit", e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    // Check if input is not empty (empty returns 0)
    if (todo.length) {
        generateTemplate(todo)
        addForm.reset(); // Reset all input filed in forms
    }
});

list.addEventListener("click", e => {
    // Checks if the element I has a delete class
    // Useful to add features, like edit, in future
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});