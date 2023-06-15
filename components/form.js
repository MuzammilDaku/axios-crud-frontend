import axios from "axios";
// import { redirect } from "next/dist/server/api-utils";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";

const form = () => {
    const router = useRouter()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState()
    const [address,setAddress] = useState('')
    
    const handleSubmit = async(e) =>{
    //  e.preventDefault();
    await axios.post('http://localhost:3001/users',{
        name :name,
        email:email,
        phone:phone,
        address:address,
     })
     console.log('Post Successfull')
     await router.push('/form')
    
        
    }
    return (
      <>
        <div className="container ">
          <h2 className="text-info">Add A Student </h2>
          <form className="my-5 py-5">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email" 
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone" 
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address" 
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
            <div className="text-center py-3 d-grid">
              <button type="button" className="btn btn-primary"  onClick={()=>handleSubmit()}>
                Submit
              </button>
            </div>  
          </form>
        </div>
      </>
    );
  };
  
  export default form;
  