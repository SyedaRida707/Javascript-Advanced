let addBtn = document.querySelector('#addbtn');
let input = document.querySelector('#inputfield');
let divShow = document.querySelector('#interact');
let addValueArray = [];


const getTodoListFromLocal = () =>{
  return  JSON.parse(localStorage.getItem('todo'));
}

const addTodoList = (event) => {
    event.preventDefault();

    addValueArray = getTodoListFromLocal() || [];
    const todoValue = input.value.trim();

    addValueArray.push(todoValue);
    addValueArray = [...new Set(addValueArray)];
    console.log(addValueArray);
    localStorage.setItem('todo',JSON.stringify(addValueArray));


    const div = document.createElement('div');
    div.classList.add('main2');
    div.innerHTML = `<p>${input.value}</p>
            <button id='deletebtn'>Delete</button>`;
    divShow.append(div);

}

addBtn.addEventListener('click', (e) => {
    addTodoList(e);
});

