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
  
    console.log(newItem)
  
    const updatedItems = [...items, newItem]
  
    setItems(updatedItems)
    setItem('')
    setId(uuid())
    setEditItem(false)
  }

  function clearList(){
    setItems([])
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
          />
          <TodoList 
            items={items}
            clearList={clearList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
