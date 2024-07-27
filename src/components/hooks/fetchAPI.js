import { useState,useEffect } from "react";
import { fetchApi } from "../helpers/fetchAPI";

export const fetchAPI = (endPoint) => {
    const [first, setfirst] = useState([])
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
      
    fetchApi(endPoint).
    then(res => {
        setfirst(res.arrayApi)
    setisloading(res.isloading)
    })
  

    

    }, [endPoint])
    return {
        first,
        isloading,
    }
}
