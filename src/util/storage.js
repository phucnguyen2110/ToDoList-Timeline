/* eslint-disable import/no-anonymous-default-export */
const TODOS_STORAGE_KEY = 'TODOS'
var objectDefault = [
    {id: 1, task: "Giảm cân", complete: false, dateOf: "2021-11-30T15:38"},
    {id: 2, task: "Học Tiếng Anh", complete: false, dateOf: "2021-12-01T15:38"},
    {id: 3, task: "Học Ruby", complete: false, dateOf: "2021-12-02T15:38"},
    {id: 4, task: "Học Java", complete: false, dateOf: "2021-12-03T15:38"},
    {id: 5, task: "Trở thành Automation Test", complete: false, dateOf: "2021-12-02T15:38"},
    {id: 6, task: "Đi xin việc làm", complete: false, dateOf: "2021-12-04T15:38"},
    {id: 7, task: "Đi học trở lại", complete: false, dateOf: "2021-12-05T15:38"},
    {id: 8, task: "Đi ngủ", complete: false, dateOf: "2021-12-06T15:38"},
];
export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
    },
    set(todoList){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todoList));
    }
}
