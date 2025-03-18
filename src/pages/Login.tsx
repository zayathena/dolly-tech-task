import React from "react";

const Login: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6 dark:bg-gray-800 border">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input 
      type="email"
      id="email"
      name="email"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter Your Email"
      required
      />

      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input 
      type="password"
      id="password"
      name="password"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter Your Password"
      required
      />

      <button>Submit</button>

      </form>
    </div>
  );
}

export default Login;