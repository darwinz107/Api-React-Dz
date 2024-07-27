import { fetchAPI } from "./hooks/fetchAPI"


export const ListAPI = ({endPoint}) => {
 
const {first,isloading} = fetchAPI(endPoint);
 

if(isloading ?<p>Loading...I'm cooking dude</p>: endPoint=='users'){

    return(
    <ol>
        {first.map(val=> <li key={val.id}> name: {val.name} - email: {val.email} - Phone: {val.phone}</li>)}
    </ol>)

}
if(isloading ?<p>Loading...I'm cooking dude</p>: endPoint=='todos'){

    return(
    <ol>
        {first.map(val=> <div key={val.id}> <h2>Title: {val.title}</h2> {val.completed ?'This is completed 😁😁':'I am so sorry 😥😥'} </div>)}
    </ol>)

}
if(isloading ?<p>Loading...I'm cooking dude</p>: endPoint=='comments'){

    return(
    <>
        {first.map(val=> <div key={val.id}> name: {val.name}  email: {val.email} <p>Body: {val.body}</p> </div>)}
    </>)

}
if(isloading ?<p>Loading...I'm cooking dude</p>: endPoint=='photos'){

    return(
    <>
        {first.map(val=> <div key={val.id}> Title: {val.title}  <img src="https://via.placeholder.com/150/771796"></img></div>)}
    </>)

}


}
