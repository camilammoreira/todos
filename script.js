const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
let items = [];

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

// Add item
addForm.addEventListener("submit", e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    // Check if input is not empty (empty returns 0)
    if (todo.length) {
        generateTemplate(todo)

        items.push(todo);

        addForm.reset(); // Reset all input filed in forms
    }
});


// Delete item
list.addEventListener("click", e => {
    // Checks if the element I has a delete class
    // Useful to add features, like edit, in future
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();

        const pos = items.indexOf(e.target.previousElementSibling.innerHTML);
        items.splice(pos, 1);
    }
});


// Filter search
const filterTodos = (term) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add("hide"));

    Array.from(list.children)
        .filter(todo => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove("hide"));
}

// Search item
search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});