'use client'
import { useState } from "react";
import GlobeDemo from "./GlobeDemo";
import { AnimatedTooltip } from "./ui/animated-toolkit";
import people from '@/utils/people'
const BentoGrid = () => {
  const [iscopied, setIscopied] = useState(false)
  return (
    <section className="flex flex-row  w-full  px-10 gap-13 justify-center items-center max-md:flex-col">
    <div className="flex flex-col gap-12">
      <div className="glass p-10 rounded-lg shadow-lg max-w-md text-center">
    <h1>Want to collab with me</h1>
    { iscopied ? (
    <button className=" font-extrabold p-5 rounded-md text-black mt-10 bg-blue-800">
      Email copied 
    </button>
     ):(
     <button className=" font-extrabold p-5 rounded-md text-black mt-10 bg-blue-800" onClick={()=>{setIscopied(true)}}>Copy my email </button>
     )}
    
      </div>
  {/* <div className="
   absolute z-50  flex items-center 
   justify-center text-white font-bold  pointer-events-none text-xl text-center flex-col
  ">
    <h1>Want to collab with me ?</h1>
    <button className=" font-extrabold p-5 rounded-md text-black  bg-blue-800">
     Copy my email
    </button>
  </div>
    <div className="flex p-10 w-120 h-90 bg-blue-900 text-white rounded-md items-center justify-center flex-col">
       <h1 className="font-extrabold">Tech stack</h1> 
       <div className="flex flex-row items-center justify-center w-full mt-12">
      <AnimatedTooltip items={people} />
    </div>
    </div> */}
    <div className="glass p-10 rounded-lg shadow-lg max-w-md text-center">
      <h1>Tech Stack</h1>
      <div className="flex flex-row items-center justify-center w-full mt-12">
      <AnimatedTooltip items={people} />
    </div>
    </div>
    </div>
    <div className=" relative top-11">
    <h2 className="text-center text-xl md:text-4xl font-bold text-white  ">
             Contact me from all over the world
          </h2>
      <GlobeDemo/>
    </div>
  </section>
  )
}

export default BentoGrid