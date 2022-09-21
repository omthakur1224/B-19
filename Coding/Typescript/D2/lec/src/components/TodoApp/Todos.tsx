import axios ,{AxiosResponse}from 'axios'
import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

type Todo={
    id:number;
    content:string;
    isComplete:boolean;
}
type InputCreateTodo={
    content:string;
    isComplete:boolean;
    // onAdd:Function;
}
const getTodos=async()=>{
    let response: AxiosResponse<Todo[]>=await axios.get('http://localhost:8080/todos');
    return response.data;
}
const postTodo=async(params:InputCreateTodo)=>{
    let response: AxiosResponse<Todo>=await axios.post('http://localhost:8080/todos',params);
    return response.data;
}

const Todos = () => {
    const [todos,setTodos]=useState<Todo[]>([]);
    useEffect(()=>{
        getTodos().then((d)=>{
            setTodos(d);
        })
    },[])

    const addTodo=async(content:string)=>{
        if(content){
            return postTodo({content,isComplete:false}).then((res)=>{
                setTodos([...todos,res]);
            })
        }
    }
    
  return (
    <div>
      {/* <TodoInput {onAdd}:InputCreateAdd/> */}
      <div>
        {todos.map((todo)=>(
            // <div key={todo.id}>{todo.content}</div>
            <TodoItem key={todo.id} {...todo}/>
        ))}
      </div>
    </div>
  )
}

export default Todos
