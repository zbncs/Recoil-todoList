import React from 'react';
import {useRecoilValue} from 'recoil';
import TodoItem from './todoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import {filteredTodoListState} from '../../store'


export default function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState)

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            {
                todoList.map(todoItem => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))
            }
        </>
    )
}