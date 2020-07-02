import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group mt-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                <TodoItem />
                <button className="btn btn-block btn-danger mt-5">clear list</button>
            </ul>
        )
    }
}