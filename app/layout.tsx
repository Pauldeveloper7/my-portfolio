import type { Metadata } from "next"
import {Raleway} from "next/font/google"
import "./global.css"
import { ReactNode } from "react";
import { Boxes } from "@/components/ui/bg";
const raleway = Raleway({subsets:["latin"]});
export const metadata :Metadata={
    title:"Komal's Portfolio",
    description:"Next generation modern Komal's portfolio",
    icons: "images/komalportfolio.jpg"
    
}
const layout = ({children}:{children:ReactNode})=>{
 return (
    <html lang="en">
    <body>
      {children}
    </body>
    </html>
 )
}

export default layout