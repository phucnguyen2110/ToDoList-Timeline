/* eslint-disable import/no-anonymous-default-export */
const TODOS_STORAGE_KEY = 'TODOS'
var objectDefault = [
    {id: 1, task: "Giảm cân", complete: false, dateOf: "2021-11-21"},
    {id: 2, task: "Học Tiếng Anh", complete: false, dateOf: "2021-11-21"},
    {id: 3, task: "Học Ruby", complete: false, dateOf: "2021-11-21"},
    {id: 4, task: "Học Java", complete: false, dateOf: "2021-11-21"},
    {id: 5, task: "Trở thành Automation Test", complete: false, dateOf: "2021-11-21"},
    {id: 6, task: "Đi xin việc làm", complete: false, dateOf: "2021-11-21"},
    {id: 7, task: "Đi học trở lại", complete: false, dateOf: "2021-11-21"},
    {id: 8, task: "Đi ngủ", complete: false, dateOf: "2021-11-21"},
];
export default {
    get(){
        var result = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) === null || JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)).length ===0 ?
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(objectDefault)) : 
        JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY));
        return result
    },
    set(todoList){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todoList));
    }
}
