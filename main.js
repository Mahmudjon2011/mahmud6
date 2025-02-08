// const userName = document.getElementById("user");
// const knopka = document.getElementById("btn");
// const elForm = document.getElementById("form");
// const colorPicker = document.getElementById("pickClr");
// const colorBack = document.getElementById("back");

// knopka.addEventListener("click", (anonim) => {
//     anonim.preventDefault();
//     userName.style.color = colorPicker.value;
//     document.body.style.backgroundColor = colorBack.value;
//  const dom = document.createElement("h1");
//  dom.textContent = `Hello, ${userName.value}!`;
//  elForm.appendChild(dom);
//  userName.value = "";
// })

const elForm = document.getElementById("form");
const elInput = document.getElementById("user");
const box = document.getElementById("list");

elForm.addEventListener("submit", (anonim) => {
    anonim.preventDefault();
    const inputningQiymati = elInput.value;

    if (inputningQiymati.trim() === "") return;

    const newLi = document.createElement("li");
    const userName = document.createElement("h2");
    const check = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    newLi.className = "item";

    userName.textContent = inputningQiymati;
    check.type = "checkbox";
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";


    deleteBtn.addEventListener("click", () => {
        newLi.remove();
    });

    
    editBtn.addEventListener("click", () => {
        const newName = prompt("Edit the name:", inputningQiymati);
        if (newName) {
            userName.textContent = newName;
        }
    });

    check.addEventListener("change", () => {
        if (check.checked) {
            userName.style.textDecoration = "line-through";
        } else {
            userName.style.textDecoration = "none";
        }
    });

    newLi.append(check, userName, deleteBtn, editBtn);
    box.append(newLi);

    elInput.value = "";
});


