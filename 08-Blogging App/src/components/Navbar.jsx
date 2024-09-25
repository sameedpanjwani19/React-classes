import React from 'react'
import { Link } from 'react-router-dom'
// import { signOutUser } from '../config/firebasemethods'

const Navbar = () => {

//   // useNavigate
//   const navigate = useNavigate()

//   const LogoutUser = async () => {
//     const user = await signOutUser();
//     setIsUser(false)
//     console.log(user);
//     navigate('login')
//   }
  return (
    <>
      <div className='d-flex justify-content-center gap-5 m-5'>
        <h5><Link to=''>Home</Link></h5>
        <h5><Link to='dashboard'>Dashboard</Link></h5>
        <h5><Link to='profile'>profile</Link></h5>
        <h5><Link to='login'>Login</Link></h5>
        <h5><Link to='register'>Register</Link></h5>
        {/* <h5 className='cursor-pointer' onClick={LogoutUser}>Logout</h5> */}
      </div>
    </>
  )
}

export default Navbar