/* eslint-disable import/no-anonymous-default-export */
const TODOS_STORAGE_KEY = 'TODOS'
var objectDefault = [
    {id: 1, task: "Giảm cân", complete: false, dateOf: "2021-11-30"},
    {id: 2, task: "Học Tiếng Anh", complete: false, dateOf: "2021-12-01"},
    {id: 3, task: "Học Ruby", complete: false, dateOf: "2021-12-02"},
    {id: 4, task: "Học Java", complete: false, dateOf: "2021-12-03"},
    {id: 5, task: "Trở thành Automation Test", complete: false, dateOf: "2021-12-02"},
    {id: 6, task: "Đi xin việc làm", complete: false, dateOf: "2021-12-04"},
    {id: 7, task: "Đi học trở lại", complete: false, dateOf: "2021-12-05"},
    {id: 8, task: "Đi ngủ", complete: false, dateOf: "2021-12-06"},
];
export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
    },
    set(todoList){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todoList));
    }
}
