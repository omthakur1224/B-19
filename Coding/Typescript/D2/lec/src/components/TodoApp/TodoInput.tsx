import React, { ChangeEvent, FormEvent, useState } from 'react'

type TodoInputProps={
  onAdd:Function;
}
const TodoInput = ({onAdd}:TodoInputProps) => {
  const [value,setValue]=useState<string>('');
  
  const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value);
  }

  const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    onAdd(value);
    setValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='new todo' onChange={onChange}/>
      {/* <input type="text" onChange={onChange}/> */}
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoInput