/* 재료 */
const inputTodoText = document.querySelector('.input-todo');    // input 태그
const btnTodoSubmit = document.querySelector('.btn-todo');      // button 태그 (input 자식)
const menuTodoBox = document.querySelector('.add-todo-list');   // 추가될 list 테두리

const todoValue = "todoValue";  // 로컬 스토리지 Key값
let arrayLocalStorage = [];     // 리스트를 로컬 스토리지에 추가할 빈 배열


/* 함수선언 : 요소 생성 & 요소에 클래스, 텍스트 추가 & 노드 연결 함수 */
function createElement(addTodoData) {
    /* 요소 생성 */
    const todoListWrapper = document.createElement('li');
    const todoSpanTextValue = document.createElement('span');
    const todoButtonDeleteList = document.createElement('button');

    /* 클래스 추가 */
    todoListWrapper.className = 'todo-button-element-list';
    todoSpanTextValue.className ='input-todo-value';
    todoButtonDeleteList.className = 'list-delete';

    todoListWrapper.id = arrayLocalStorage.length + 1;

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



/* 함수선언 : 로컬 스토리지 추가 기능 함수(순서대로 - 새로고침해도 로컬스토리지 값 그대로 있음) */
function onAddListLocalStorage(addTodoData) {
    /*  "value: addTodoData" , "id: 배열(addLocalStorage)길이 + 1" 객체 형태로 변수 todoData에 저장 */
    const todoData = { value: addTodoData, id: arrayLocalStorage.length + 1 };

    /* "addLocalStorage"배열에 todoData값을 push함 */
    arrayLocalStorage.push(todoData);

    /* 로컬 스토리지에 KEY:Todo라는 명칭으로 "addLocalStorage"저장된 값을 JSON으로 변환하여 저장 */
    localStorage.setItem(todoValue, JSON.stringify(arrayLocalStorage));
}



/* 함수선언 : 로컬 스토리지에서 요소 삭제 함수 */
function loadTodoLocalStorage() {
    /* 로컬 스토리지에서 키값이"todoValue"로 저장된 데이터가 있는지 보고, 있다면 동작을 수행한다. */
    const loadLocalStorage = localStorage.getItem(todoValue);

    /* "loadLocalStorage"값이 비어있지 않다면 아래 코드를 실행 (로컬 스토리지가 비어있지 않다면) */
    if (loadLocalStorage !== null) {
        const parsedLocalStorage = JSON.parse(loadLocalStorage);

        /* "parsedLocalStorage"를 순회하면서 변수 todo에 저장 */
        for (let todo of parsedLocalStorage) {
            /* "parsedLocalStoraged"의 객체는 todo이며, 객체의 키값은 data이다. */
            const data = todo.data; // const {text} = data

            /* 함수실행 : 요소 생성 & 요소에 클래스, 텍스트 추가 & 노드 연결 함수 */
            createElement(data);

            /* 함수실행 : 로컬 스토리지에 "input"입력값 추가 */
            onAddListLocalStorage(data);
        }
    }
}



/* 함수선언 : 작업 완료 버튼 기능 */
function dltTodoListClear() {

}



/* 함수선언 : 작업 삭제 버튼 기능 */
function dltTodoListDelete(dltEvent) {
    /* "dltEvent(button)"인자를 받는다. */
    const dltButton = dltEvent.target;
    console.log(dltButton)

    /* "parentNode"는 부모태그를 반환하며 "dltEvent(button)"의 부모태그(ul)를 "liDltButton"변수에 저장한다. */
    const liDltButton = dltButton.parentNode;
    console.log(liDltButton)

    /* "remove"메소드를 사용하여 "menuTodoBox"태그의 자식태그를 삭제한다. */
    menuTodoBox.remove(liDltButton);

    /* 로컬 스토리지에서 삭제 기능 고차함수(선택한 것) */
    arrayLocalStorage = arrayLocalStorage.filter((addTodoData) => addTodoData.id !== (liDltButton.id));

    /* 로컬 스토리지에 KEY:Todo라는 명칭으로 "addLocalStorage"저장된 값을 JSON으로 변환하여 저장 */
    localStorage.setItem(todoValue, JSON.stringify(arrayLocalStorage));
}



/* 함수선언 : 버튼 클릭시 실행 함수 (이벤트 리스너와 연동) */
function onAddBtnOnClick(event) {
    /* Submit시 새로고침 방지 */
    event.preventDefault()

    /* inputTodoText(input 태그)의 입력값을 "addTodoData"변수에 저장 */
    const addTodoData = inputTodoText.value;

    /* 함수실행 : "createElement"함수 실행 (요소 생성) */
    createElement(addTodoData);

    /* 함수실행 : 로컬 스토리지 추가 기능 함수(순서대로 - 새로고침해도 로컬스토리지 값 그대로 있음) */
    onAddListLocalStorage(addTodoData)

    /* "createElement"함수 실행 후 "input"태그(입력창)의 값을 비워준다. */
    inputTodoText.value = ""
}



/* 이벤트 리스너 선언 : 버튼 클릭시 입력된 내용 추가 이벤트 리스너(Test) -> "onAddBtnOnClick"함수가 실행됨 */
btnTodoSubmit.addEventListener('click', onAddBtnOnClick);