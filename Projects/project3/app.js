let addBtn = document.querySelector('#addbtn');
let input = document.querySelector('#inputfield');
let divShow = document.querySelector('#interact');

const addTodoList = (event) => {
    event.preventDefault();
    console.log('test');
    const div = document.createElement('div');
    div.classList.add('main2');
    div.innerHTML = `<p>${input.value}</p>
            <button id='deletebtn'>Delete</button>`;
    divShow.append(div);
}

addBtn.addEventListener('click', (e) => {
    addTodoList(e);
});