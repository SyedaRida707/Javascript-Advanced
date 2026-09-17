let addBtn = document.querySelector('#addbtn');
let input = document.querySelector('#inputfield');
let divShow = document.querySelector('#interact');


const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem('todo'));
}
const addagain = (addValueArray) => {
    localStorage.setItem('todo', JSON.stringify(addValueArray));
}

const showDynamic = (e) => {
    const div = document.createElement('div');
    div.classList.add('main2');
    div.innerHTML = `<p>${e}</p>
            <button id='deletebtn'>Delete</button>`;
    divShow.append(div);
}

let addValueArray = getTodoListFromLocal() || [];

const addTodoList = (event) => {
    event.preventDefault();

    const todoValue = input.value.trim();
    input.value = '';

    if (todoValue != '' && !addValueArray.includes(todoValue)) {
        addValueArray.push(todoValue);
        addValueArray = [...new Set(addValueArray)];
        // console.log(addValueArray);
        localStorage.setItem('todo', JSON.stringify(addValueArray));

        showDynamic(todoValue);
    }
}

const showData = () => {
    // console.log(addValueArray);
    addValueArray.forEach((element) => {
        showDynamic(element);
    });

}

showData();

// remove
const deletetodo = (e) => {
    let getodo = e.target;
    let removetodo = getodo.previousElementSibling.innerText;
    let parentElem = getodo.parentElement;
    // console.log(removetodo);

    addValueArray = addValueArray.filter((e) => {
        console.log(e);
        return e != removetodo.toLowerCase();
    });

    addagain(addValueArray);
    parentElem.remove();
    // console.log(addValueArray);   
}

divShow.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains('deletebtn')) {
        deletetodo(e);
    }
});

addBtn.addEventListener('click', (e) => {
    addTodoList(e);
});


