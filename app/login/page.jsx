import React from 'react'
import Header from '@/components/layout/header'

function Login() {
  return (<>
    <Header>
        <div className="flex-1">
          <div className="flex flex-col space-y-5 rounded bg-gray-50 p-5 shadow-lg">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold">Sign In</h1>
            </div>
            <form className="flex flex-col justify-center space-y-3">
              <div className="flex flex-col justify-center">
                <label htmlFor="username" className="text-sm font-medium">Username</label>
                <input id="username" type="text" className="rounded-md border border-gray-300 px-3 py-2 transition-all focus:border focus:border-gray-500 focus:outline-none focus:ring-0" />
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input id="password" type="password" className="rounded-md border border-gray-300 px-3 py-2 transition-all focus:border focus:border-gray-500 focus:outline-none focus:ring-0" />
              </div>
              <button className="rounded-md bg-[#1e1d3b] px-3 py-2 text-lg font-medium text-gray-50">Submit</button>
            </form>
          </div>
        </div>
    </Header>
  </>)
}

export default Login