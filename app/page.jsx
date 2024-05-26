import  {HeroParallax}  from "@/components/ui/Hero"
import { products } from "@/utils/products";
import { cn } from "@/utils/cn";
import BentoDemo from '@/components/BentoDemo'
const page = () => {

  return (
    <main className="relative w-full bg-black text-white h-full overflow-hidden">
        <div>
            <h1>Hello , Komal here</h1>
            <HeroParallax products={products}/>
        </div>
        <div className="m-auto relative  top-[60%]">
          <h1 className=" text-center bold  from-stone-300 p-10 ">Projects</h1>
       <BentoDemo/>
           </div>
    </main>
  )
}

export default page