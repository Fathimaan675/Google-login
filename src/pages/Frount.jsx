import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Frount() {
  const [userdetail, setUserdetail] = useState(""); // Corrected variable name to userdetail
  const navigate = useNavigate();

  const handlelogout = () => {
    sessionStorage.removeItem("userName");
    setUserdetail(''); // Corrected typo here
    toast.success("Signout Successfully");
    navigate('/');
  }

  useEffect(() => {
    if (sessionStorage.getItem('userName')) {
      setUserdetail(sessionStorage.getItem("userName")); // Corrected variable name to setUserdetail
    }
  }, []);

  return (
    <>
      <div style={{ height: "100vh" }} className=' p-5 w-100'>
        <div style={{ height: '85vh' }} className=' w-50 container d-flex flex-column justify-content-between' >
          <div>
            <div className='text-center'><i className="fab fa-slack"></i></div> {/* Changed class to className */}
    
            <h2 className='text-center' >Welcome {userdetail} </h2> {/* Corrected variable name to userdetail */}
            <img className='mb-1' style={{height:'200px',marginTop:'200px'}} src="https://i.scdn.co/image/b84878e257a06967766aea953cc5e22e30c78b0b" alt="" />
          </div>
          <div>
            <div className='btn btn-info text-center mb-4 '><button onClick={handlelogout} className='btn btn-success border-rounded'>Logout</button></div>
          </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      </div>
    </>
  );
}

export default Frount;
