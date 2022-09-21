import React from 'react'
type TodoProps={
  id:number;
  content:string;
  isComplete:boolean;
}
const TodoItem = ({content,isComplete}:TodoProps) => {

  return (
    <div>
      {content}-{isComplete?"Completed":"Pending"}
    </div>
  )
}

export default TodoItem
