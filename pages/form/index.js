import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      setMyData(res.data);
    });
  }, []);
  const getData = () => {
    axios.get("http://localhost:3001/users").then((res) => {
      setMyData(res.data);
    });
  };
  const handleDel = (id) => {
    if (confirm("Are You Sure to delete this student?") == true) {
      axios
        .delete(`http://localhost:3001/users/${id}`)
        .then(() => {
          console.log("done");
        })
        .catch((e) => {
          console.log("We are in catch", e);
        });
      getData();
    } else {
    }
  };
  const handleEdit = (name,email,phone,address,_id) => {
    // router.push("/form/edit");
    // console.log(name,email)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('phone',phone)
    localStorage.setItem('address',address)
    localStorage.setItem('id',_id)
  };
  return (
    <>
      <div className="container text-center ">
        <Link href="/form/create">
          <button className="btn btn-outline-success my-3">
            Add a Student
          </button>
        </Link>
        {/* <button className="btn btn-outline-success ">Add a Student</button> */}

        <div className=" text-center">
          <h1 className="text-primary">All Students Data </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {myData?.map &&
                myData?.map((e) => {
                  return (
                    <>
                      <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td>{e.address}</td>
                        <td>
                          <Link href='/form/edit'>
                          <button
                            className="btn btn-outline-info"
                            onClick={() => handleEdit(e.name,e.email,e.phone,e.address,e._id)}
                          >
                            Edit
                          </button>
                          </Link>
                       
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleDel(e._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default index;
