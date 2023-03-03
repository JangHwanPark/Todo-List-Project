/* 재료 */

// input 태그
const inputTodoText = document.querySelector('.input-todo');

// button 태그 (input 자식)
const btnTodoSubmit = document.querySelector('.btn-todo');

// 추가될 list 테두리
const menuTodoBox = document.querySelector('.add-todo-list');

// 리스트를 로컬 스토리지에 추가할 빈 배열
const arrLocalStorage = [];

/* 요소 생성 & 요소에 클래스 추가 */
function onAddElementClass() {
    const todoListWrapper = document.createElement('li');
    const todoSpanTextValue = document.createElement('span');
    const todoButtonDeleteList = document.createElement('button');

    todoListWrapper.className = 'todo-buttond-elete-list';
    todoSpanTextValue.className ='input-todo-value';
    todoButtonDeleteList.className = 'list-delete';
}


/* 리스트 추가 기능 */
function onAddBtnOnClick(event) {
    event.preventDefault()  // 서밋시 새로고침 방지
    menuTodoBox.insertAdjacentHTML('beforeend', );
}


/* 로컬 스토리지 추가 기능 */
function onAddListLocalStorage() {

}


/* 작업 완료 버튼 기능 */
function delTodoListClear() {
    
}


/* 버튼 클릭시 입력된 내용 추가 */
btnTodoSubmit.addEventListener('click', onAddBtnOnClick);