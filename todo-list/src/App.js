import React, { useState } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuid } from 'uuid';

function App() {

  const [items, setItems] = useState([])
  const [id, setId] = useState(uuid())
  const [item, setItem] = useState('')
  const [editItem, setEditItem] = useState(false)

  function handleChange (e) {

    setItem(e.target.value)
  }

  function handleSubmit (e) {

    e.preventDefault()
    const newItem = {
      id:id,
      title:item
    }
  
    const updatedItems = [...items, newItem]
  
    setItems(updatedItems)
    setItem('')
    setId(uuid())
    setEditItem(false)
  }

  function clearList(){

    setItems([])
  }

  function handleDelete(id){

    const filteredItems = items.filter(item => item.id !== id)
    setItems(filteredItems)
  }

  function handleEdit(id) {

    const filteredItems = items.filter(item => item.id !== id)
    const selectedItem = items.find(item => item.id === id)

    setItems(filteredItems)
    setItem(selectedItem.title)
    setEditItem(true)
    setId(id)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput 
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList 
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
