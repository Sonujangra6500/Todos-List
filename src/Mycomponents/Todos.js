import React from 'react'
import TodoItem from './TodoItem'
import { useState,useEffect } from 'react';
import AddTodos from './AddTodos';
export const Todos = () => {
  let initTodos;
  if(localStorage.getItem("todos") === null){
    initTodos = [];
  }
  else{
   initTodos =  JSON.parse(localStorage.getItem("todos"))
  }
  const addTodo = (title,desc)=>{
    console.log("i am adding this todo",title , desc)
    let sno;
    if(todos.length === 0){
      sno = 0;
    }else{
   sno = todos[todos.length-1].sno+1}
    const myTodo = {
      sno : sno,
      title: title,
      desc : desc
    }
    settodos([...todos,myTodo])
    console.log(myTodo);
  }
  const onDelete = (todo)=>{
    console.log("i am ondelete" , {todo})
    settodos(todos.filter((e)=>{
      return e!== todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  const [todos,settodos] = useState(initTodos)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <div className="container">
          <AddTodos addTodo = {addTodo} />
        <h3 className='text-center my-3'>Todos list</h3>
        {todos.length === 0 ? "No Todos to display" :  
                 todos.map((todo)=>{
            return(
              <>
              <TodoItem todo = {todo} key = {todo.sno} onDelete ={onDelete}/> <hr/>
            </>
          )
          })}
    </div>
  )
}
