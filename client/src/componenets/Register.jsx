

 function Register() {
  return (
    <>
    <div className=" flex justify-center mt-20 ">
    <div className=" flex flex-col  justify-evenly w-3/4 md:w-1/3 h-2/3 shadow-md rounded-md p-5">
          <h1 className=" text-center mb-5 text-xl font-bold text-gray-900 "> Sign Up</h1>
          <form className=" flex flex-col items-center ">
          <input 
            className=" block bg-white  w-5/6 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 sm:text-sm mb-3"
            type="text"
            placeholder="Username"
          />
          <input
             className=" block bg-white  w-5/6 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-gray-900  focus:ring-1 sm:text-sm mb-3 "
             type= "email"
             placeholder=" Email"
          />
           
          <input
            className=" block bg-white  w-5/6 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 sm:text-sm mb-3"
            type="password"
            placeholder="Password"
          />
          
          <input
            className=" block bg-white w-5/6 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 sm:text-sm mb-3 "
            type="password"
            placeholder=" Confirm Password"
          />
          <button className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white p-1 pr-5 pl-5 rounded-md m-5">Sign Up</button>
          </form>
          
          <p className=" text-center mb-5">Already have account? <span className=" cursor-pointer text-blue-500">Sign In</span></p>
       </div>
    </div>
       
    </>
  )
}

export default Register;
