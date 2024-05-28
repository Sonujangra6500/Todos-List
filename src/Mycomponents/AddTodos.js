import React, { useState } from 'react'
const AddTodos = ({addTodo}) => {
    const [title,settitle] = useState("")
    const [desc,setdesc] = useState("")
    const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert("Title or Description cannot be blank")
      }
      else{
      addTodo(title,desc);
      settitle("");
      setdesc("");}
    }
  return (
    <div className='container my-3'>
    <h3 className='text-center'>Add a Todo</h3>
<form onSubmit={submit}>
  <div className="mb-3">
    <label  className='form-lable'>Todo Title</label>
    <input type="text" className='form-control' value={title} onChange={(e)=>{settitle(e.target.value)}} id='title' placeholder="Enter yours todo title" />
  </div>
  <div className="mb-3">
    <lable  className= "form-lable">Todo Description</lable>
    <input type="text" value={desc}  onChange={(e)=>{setdesc(e.target.value)}} id='desc' placeholder="Enter yours todo description" required={false} 
    className='form-control '
    />
  </div>
  <button className='btn btn-sm btn-success' type="submit">
    Add Todo
  </button>
</form>
</div>
)
}
export default AddTodos;
