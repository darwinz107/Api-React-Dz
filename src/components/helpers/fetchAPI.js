export    const fetchApi = async(endPoint)=>{
    try{
const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
const arrayApi= await response.json();
return{
    arrayApi,isloading:false
}



}catch(error){console.error};
}
  

