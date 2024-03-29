import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Concert() {
  
 
    const navigate = useNavigate();
    const [values,setValues] = useState({
      name: '',
      email: '',
      username: '',
      password: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch("http://localhost:8081/Edit2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: values.id,
          name: values.name,
          email: values.email,
          username: values.username,
          password: values.password
         
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            navigate('/ShowAndId');
          } else {
            console.log(data);
            navigate('/ShowAndId');
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const handleInput = (event) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    };
  
  return (

    <>
    <div className='text-center'>
   
    <div className="flex">
        <form className="center2">
          <h3 className="colorw text-center"> Edit Student Registration</h3>

          <table className="table2">
            <thead className="tbody">
            <tr>
                
                <th>
                  {" "}
                  <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Student Registration Id</label>

                </th>
                <th>
                <input type="number" onChange={handleInput} className=""  name="id" placeholder="Student ID to Edit" id="id" />

                </th>
              </tr>
              <tr>
                
                <th>
                  {" "}
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-3 "
                  >
                    Student Name
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    onChange={handleInput}
                    name="name"
                    className=" my-2  "
                    id="Concert_Name"
                    placeholder="Enter Students Name"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-3"
                  >
                    Email
                  </label>
                </th>
                <th>
                  <input
                    type="email"
                    onChange={handleInput}
                    name="email"
                    className="my-2 mx-3 "
                    id="Team_Name"
                    placeholder="Enter Email"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className=" mb-3 my-3 mx-3 "
                  >
                    Username
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    onChange={handleInput}
                    name="username"
                    className=""
                    id="Ticket_Fee"
                    placeholder="Username"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-5"
                    type="date"
                  >
                    Password
                  </label>
                </th>
                <th>
                  <input
                    type="password"
                    onChange={handleInput}
                    name="password"
                    className="my-2 mx-1"
                    id="date"
                    placeholder="Enter Password"
                  />
                </th>
              </tr>
            </thead>
            <tbody className="tbody"></tbody>
          </table>

          <div className="center2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Save Changes
            </button>
          </div>
        </form>
        </div>



</div>


    
    </>



   
  )
}
