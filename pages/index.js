import { useEffect, useState } from "react"
import axios from "axios"
const index = () => {
  const [api,setApi] = useState([])
useEffect(()=>{
 getData()
},[])
const getData = async()=>{
const res = await fetch('http://localhost:3001/users')
const data =  res.json()
setApi(data)
}

  return (
    <>
  {api.map((e)=>{
       return (
        <>
        <div>
          <h5>{e.name}</h5>
          <h5>{e.email}</h5>
        </div>
        </>
       )
  })}
    </>
  )
}

export default index
