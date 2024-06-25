import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Handle login logic here
    navigate('/dashboard')
  }

  return (
    <>
    <div className="flex h-screen  ">
      <div className="m-auto p-8 bg-white rounded shadow-md max-w-md w-full">
        <h1 className="text-6xl font-bold mb-4">Welcome to K&A Performance Portal</h1>
        <button
          onClick={handleLogin}
          className="flex items-center justify-center w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          <img src="https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol.png" alt="Google" className="w-6 h-6 mr-2" />
          Login with Google
        </button>
        <p className="mt-4 text-sm text-gray-600">
          By clicking continue, you agree to our <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>.
        </p>
      </div>
    </div>
    </>
  )
}

export default Login