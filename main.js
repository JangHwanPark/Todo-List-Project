/* 재료 */
const inputTodoText = document.querySelector('.input-todo');    // input 태그
const btnTodoSubmit = document.querySelector('.btn-todo');      // button 태그 (input 자식)
const menuTodoBox = document.querySelector('.add-todo-list');   // 추가될 list 테두리

const arrLocalStorage = [];     // 리스트를 로컬 스토리지에 추가할 빈 배열


/* 요소 생성 & 요소에 클래스, 텍스트 추가 & 노드 연결 */
function onAddBtnOnClick(event) {
    event.preventDefault()  // 서밋시 새로고침 방지
    const todoListWrapper = document.createElement('li');
    const todoSpanTextValue = document.createElement('span');
    const todoButtonDeleteList = document.createElement('button');

    todoListWrapper.className = 'todo-button-element-list';
    todoSpanTextValue.className ='input-todo-value';
    todoButtonDeleteList.className = 'list-delete';

    todoSpanTextValue.textContent = inputTodoText.value;
    todoButtonDeleteList.textContent = 'X';

    menuTodoBox.append(todoListWrapper);
    todoListWrapper.append(todoSpanTextValue);
    todoListWrapper.append(todoButtonDeleteList);
}


/* 로컬 스토리지 추가 기능 */
function onAddListLocalStorage() {
    localStorage.setItem('Todo', JSON.stringify(arrLocalStorage));
}


/* 작업 완료 버튼 기능 */
function delTodoListClear() {
    const endButtonTodo = document.querySelector('.list-delete');
    const delButtonTodo = document.querySelector('.todo-button-element-list');
}


/* 버튼 클릭시 입력된 내용 추가 */
btnTodoSubmit.addEventListener('click', onAddBtnOnClick);