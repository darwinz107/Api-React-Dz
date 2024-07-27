import { useState } from "react";
import { ListAPI } from "./components/listAPI";



export const ListApp = () => {
  const [valEndPoint, setValEndPoint] = useState('')
  const onUser =()=>{

    setValEndPoint('users');
  }
  const onComment =()=>{

    setValEndPoint('comments');
  }
  const onPhoto =()=>{

    setValEndPoint('photos');
  }
  const onTodo =()=>{

    setValEndPoint('todos');
  }


    return (
    <>
    <h4>Press a buttom</h4>
    <button onClick={onUser}>User</button>
    <button onClick={onComment}>Comment</button>
    <button onClick={onPhoto}>Photo</button>
    <button onClick={onTodo}>Todo</button>
    
    <ListAPI endPoint={valEndPoint}></ListAPI>
    </>
  )
}
