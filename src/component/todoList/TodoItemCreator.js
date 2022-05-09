import React, {useState} from 'react'
import {useSetRecoilState} from 'recoil'
import {todoListState} from '../../store'

export default function TodoItemCreator() {
    const setTodoList = useSetRecoilState(todoListState)
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ]);
        setInputValue('')
    }
    const onChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}
// 用于创建唯一 id 的工具函数
let id = 0;
function getId() {
  return id++;
}
