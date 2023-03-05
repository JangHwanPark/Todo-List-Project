/* 재료 */
const inputTodoText = document.querySelector('.input-todo');    // input 태그
const btnTodoSubmit = document.querySelector('.btn-todo');      // button 태그 (input 자식)
const menuTodoBox = document.querySelector('.add-todo-list');   // 추가될 list 테두리
const addLocalStorage = [];     // 리스트를 로컬 스토리지에 추가할 빈 배열


/* 요소 생성 & 요소에 클래스, 텍스트 추가 & 노드 연결 함수 */
function createElement(addTodoData) {
    /* 요소 생성 */
    const todoListWrapper = document.createElement('li');
    const todoSpanTextValue = document.createElement('span');
    const todoButtonDeleteList = document.createElement('button');

    /* 클래스 추가 */
    todoListWrapper.className = 'todo-button-element-list';
    todoSpanTextValue.className ='input-todo-value';
    todoButtonDeleteList.className = 'list-delete';

    /* 텍스트 추가 */
    todoSpanTextValue.textContent = addTodoData
    todoButtonDeleteList.textContent = 'X';

    /* 노드 연결 */
    menuTodoBox.append(todoListWrapper);
    todoListWrapper.append(todoSpanTextValue);
    todoListWrapper.append(todoButtonDeleteList);

    /* 리스너 추가 (span, button) */
    todoSpanTextValue.addEventListener('click', dltTodoListClear);
    todoButtonDeleteList.addEventListener('click', dltTodoListDelete);
}



/* 로컬 스토리지 추가 기능 함수(순서대로) */
function onAddListLocalStorage(addTodoData) {
    /* "addLocalStorage"배열에 addTodoData값을 push함 */
    addLocalStorage.push(addTodoData);

    /* 로컬 스토리지에 KEY:Todo라는 명칭으로 "addLocalStorage"저장된 값을 JSON으로 변환하여 저장 */
    localStorage.setItem('Todo', JSON.stringify(addLocalStorage));
}


/* 로컬 스토리지에서 삭제 기능 함수(선택한 것) */
function dltListLocalStorage() {

}


/* 작업 완료 버튼 기능 */
function dltTodoListClear(event) {
    console.log(event)
}


/* 작업 삭제 버튼 기능 */
function dltTodoListDelete() {

}


/* 버튼 클릭시 실행 함수 */
function onAddBtnOnClick(event) {
    /* Submit시 새로고침 방지 */
    event.preventDefault()

    /* inputTodoText(input 태그)의 입력값을 "addTodoData"변수에 저장 */
    const addTodoData = inputTodoText.value;

    /* "createElement"함수 실행 (요소 생성) */
    createElement(addTodoData);

    /* "createElement"함수 실행 후 "input"태그의 값을 비워준다. */
    inputTodoText.value = ""

    /* 로컬 스토리지에 "input"입력값 추가 */
    onAddListLocalStorage(addTodoData);
}


/* 버튼 클릭시 입력된 내용 추가 이벤트 리스너(Test) -> "onAddBtnOnClick"함수가 실행됨 */
btnTodoSubmit.addEventListener('click', onAddBtnOnClick);