import  {HeroParallax}  from "@/components/ui/Hero"
import { products } from "@/utils/products";
import { cn } from "@/utils/cn";
import Navbar from "@/components/Navbar";
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
        <div className="m-auto relative  top-[60%]">
        <h1 className="text-2xl md:text-5xl font-bold dark:text-white p-20 text-center ">
        My Ideology <br /> 
      </h1>
      <div className="flex items-center justify-center
       bg-[#0E0E10]
       h-[40rem] rounded-2xl w-90">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
           </div>
    </main>
  )
}

export default page