import React, {useState, useEffect} from 'react';
import Todos from "./components/todos";
import {listTodos} from "./api";
import keyBy from 'lodash/keyBy';

export default function App() {
    const [todos, setTodos] = useState({});
    const fetchTodos = async () => {
        const res = await listTodos();
        console.log(res.data);
        setTodos(keyBy(res.data, 'id'));
    };
    const cb = () => {
        fetchTodos().then().catch();
    };
    useEffect(cb, [true]);
    return (<div>
        <Todos fetchTodos={fetchTodos} todos={todos}/>
    </div>);
}
