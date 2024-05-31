'use client'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import GlobeDemo from "./GlobeDemo";

const BentoGrid = () => {
  return (
    <section className="">
    <div className="flex flex-col gap-10 ">
      <div className="">
    <BackgroundGradientAnimation>
  <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-xl text-center md:text-xl lg:text-xl flex-col">
    <h1>Want to collab with me ?</h1>
    <button className=" font-extrabold   bg-white p-5 rounded-md text-black mt-10">
     Copy my email
    </button>
  </div>
</BackgroundGradientAnimation>
      </div>
    <div className=" flex p-10 w-120 h-90 bg-white text-black rounded-md items-center justify-center">
       <h1 className="font-extrabold">Tech stack</h1> 
       
    </div>
    </div>
    <div className="">
    <h2 className="text-center text-xl md:text-4xl font-bold text-white  ">
             Contact me from all over the world
          </h2>
      <GlobeDemo/>
    </div>
  </section>
  )
}

export default BentoGrid