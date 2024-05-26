import  {HeroParallax}  from "@/components/ui/Hero"
import { products } from "@/utils/products";
import { cn } from "@/utils/cn";
import BentoDemo from '@/components/BentoDemo'
import Navbar from "@/components/Navbar";
const page = () => {

  return (
    <main className="relative w-full bg-black text-white h-full overflow-hidden">
      <Navbar/>
        <div>
            <HeroParallax products={products}/>
        </div>
        <div className="m-auto relative  top-[60%]">
          <h1 className=" text-center bold  from-stone-300 p-20 heading ">Projects</h1>
       <BentoDemo/>
           </div>
    </main>
  )
}

export default page