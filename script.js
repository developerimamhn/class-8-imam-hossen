const inputText = document.querySelector('.text-div');
const formText = document.querySelector('.form-text');
const listText = document.querySelector('.list-div');


formText.addEventListener("submit", (event)=>{
    event.preventDefault();

    addTask();
    inputText.value = ''
});

const addTask = () => {
    const li = document.createElement('li');
    const divelement = document.createElement('div');
    divelement.textContent = inputText.value;
    li.appendChild(divelement);
    listText.appendChild(li);

    const actiondiv = document.createElement('div')
    li.appendChild(actiondiv);

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.addEventListener('click', () =>{
        listText.removeChild(li);
    })
    actiondiv.appendChild(deletebtn);

    const editbtn = document.createElement('button');
    editbtn.textContent = 'Edit';
    editbtn.addEventListener('click', ()=>{
        const newTask = prompt("Enter the edit");
        li.firstChild.textContent = newTask;
    })
    actiondiv.appendChild(editbtn);

    const checkbokbutton = document.createElement('input');
    checkbokbutton.type = 'checkbox';
    checkbokbutton.addEventListener('change', ()=>{
        if(checkbokbutton.checked){
            li.classList.add('complement');
        }else{
            li.classList.remove('complement');
        }
    })
    actiondiv.appendChild(checkbokbutton);
};