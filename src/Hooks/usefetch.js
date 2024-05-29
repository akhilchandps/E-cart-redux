import { useEffect, useState } from "react"


const useFetch=(url)=>{
    const [data, setData] =useState("")
    useEffect(()=>{
        fetch(url).then((res)=>{
            res.json().then((arrayData)=>setData(arrayData.products))
        })
    },[url])

    return data
}
export default useFetch