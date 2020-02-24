const axios = require('axios');
// const BASE_URL = 'https://priya-ravi-entities.herokuapp.com';
const BASE_URL = 'http://localhost:8000';

export const listTodos = () => {
    return axios({
        url: `${BASE_URL}/todos`,
        method: 'get',
    });
};
export const getTodo = id => {
    return axios({
        url: `${BASE_URL}/todos/${id}`,
        method: 'get',
    });
};
export const createTodo = todo => {
    console.log('making a post request ... ');
    return axios({
        url: `${BASE_URL}/todos`,
        method: 'post',
        data: todo,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
export const updateTodo = todo => {
    return axios({
        url: `${BASE_URL}/todos/${todo.id}`,
        method: 'put',
        data: todo
    });
};
export const deleteTodo = id => {
    return axios({
        url: `${BASE_URL}/todos/${id}`,
        method: 'delete',
    });
};

