import Image from "next/image";
import GoogleLogo from "../assets/images/google-logo.svg"
import AppleLogo from "../assets/images/apple-logo.svg"
import BlobSvg from "../assets/images/blob.svg"
import { motion } from "framer-motion"




export default function Home() {
  return (
    <div className="min-h-screeen flex flex-col">
      <div className="min-h-screen grid grid-cols-12">

<div className="h-full col-span-6 relative bg-indigo-700">






<BlobSvg className="w-180 h-180"></BlobSvg>





    
</div>

<div className="col-span-6 px-8 flex mt-20">
  <div>
  <h1 className="text-5xl font-bold">Login</h1>
  <div className="mt-8">
  <h2 className="text-gray-500 mb-8">See your growth and get consulting support!</h2>

  <div className="w-72">
  <button className="w-full py-2 px-6 bg-white hover:bg-slate-50 text-gray-400 rounded-full border border-gray-300 font-bold"><GoogleLogo className="w-8 h-8 flex justify-center"></GoogleLogo>Sign in with Google</button>
  <button className="mt-4 w-full py-2 px-6 bg-white hover:bg-slate-50 text-black rounded-full border border-gray-300 font-bold"><AppleLogo className="w-7 h-7 flex justify-center"></AppleLogo>Sign in with Apple</button>
  <span className="h-1 bg-black-400"></span>
  <span className="flex justify-center mt-2 mb-2 text-gray-500">or Sign in with Email</span>
  <span className="h-1 bg-black-400"></span>
  

  <div className="mt-4">
  
  <p  className="text-grey-400">Email*</p>
  <input type="email" placeholder="mail@website.com" className=" mt-2 w-full py-2 px-6 border border-gray-200  text-primary hover:bg-slate-50 rounded-full"></input>

  <p  className="text-grey-400 mt-4">Password*</p>
  <input type="password" placeholder="Min. 8 character" className=" mt-2 w-full py-2 px-6 border border-gray-200  text-primary hover:bg-slate-50 rounded-full"></input>
  <input className="mr-2 mt-8 bg-indigo-700" type="checkbox" placeholder="Remember Me" />
  <label htmlFor="rememberMe" className="text-black">Remember me</label>
  <a href="" className="px-3 text-indigo-500 hover:text-indigo-700 hover:underline">Forget password?</a>
  
  <button className=" mt-8 w-full py-2 px-6 bg-indigo-500 text-white hover:bg-indigo-800 rounded-full">Sign in</button>


  </div>

  </div>
  

 
  </div>
  


  </div>
  

</div>


</div>


    </div>
  )
}
