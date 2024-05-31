import  {HeroParallax}  from "@/components/ui/Hero"
import { products } from "@/utils/products";
import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
const page = () => {

  return (
    <main className="relative w-full bg-black text-white h-full overflow-hidden">
      <Navbar/>
        <div>
            <HeroParallax products={products}/>
        </div>
        <div className="m-auto relative  top-[60%] ">
        <h1 className="text-2xl md:text-5xl font-bold dark:text-white p-20 text-center ">
        My Ideology <br /> 
      </h1>
      {/* bg-[#0E0E10] */}
      <div className="flex items-center justify-center
       bg-custom-image bg-cover bg-center 
       h-[35rem] rounded-2xl w-full max-md:w-90 m-auto p-5">
      <TextRevealCard
        text="Full stack web developer "
        revealText="  My approach blends technical expertise with creative vision, ensuring each project resonates with its audience and achieves its goals. "
      >
        <TextRevealCardTitle>
        I'm Komal Paul, a React developer passionate about transforming innovative ideas into dynamic web experiences.
                </TextRevealCardTitle>
        <TextRevealCardDescription>
        Every line of code is a brushstroke on the canvas of the web text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
           </div>
           <div className=" mt-11 relative top-16">
             <BentoGrid/>
           </div>
    </main>
  )
}

export default page