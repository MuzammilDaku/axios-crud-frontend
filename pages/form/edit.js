import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const edit = () => {
    const router = useRouter()
    const [id,setId] = useState(0)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState()
    const [address,setAddress] = useState('')
    
    useEffect(()=>{
        setId(localStorage.getItem('id'))
         setName(localStorage.getItem('name'))
         setPhone(localStorage.getItem('phone'))
         setAddress(localStorage.getItem('address'))
         setEmail(localStorage.getItem('email'))
    },[])
    
    const handleUpdate = async() =>{
     try{
         await axios.patch(`http://localhost:3001/users/${id}`,{
              name:name,
              phone:phone,
              address:address,
              email:email
          })
        await router.push('/form')
     }
     catch(e){
       console.log('We are in catch error' ,e)
     }
    }
  return (
    <>
      <div className="container w-50">
          <h2 className="text-info">Edit / Update A Student </h2>
          <form className="">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"  value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone" 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                placeholder="Address" 
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
            <div className="text-center py-3 d-grid">
              <button type="button" className="btn btn-primary"  onClick={()=>handleUpdate()}>
                Submit
              </button>
            </div>
        
          </form>
        </div>
    </>
  )
}

export default edit
