import React from 'react';
import '../css/admin.css';

const Login = () => {
  return (
    <div className='admin-login-wrapper'>
      <div className="container">
        <form>
          <h5 className='text-center mb-3'>Admin Login</h5>
          <div className="form-group mb-4">
            <label htmlFor="email" className="form-label">
              Email ID <span className='text-red'>*</span>:
            </label>
            <input type="email" className="form-control" id='email' name='email' required />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password <span className='text-red'>*</span>:
            </label>
            <input type="password" className="form-control" id='password' name='password' required/>
          </div>
          <div className="form-group my-4">
            <input type="submit" className="form-control btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;