import type { Metadata } from "next"
import {Raleway} from "next/font/google"
import "./global.css"
import { ReactNode } from "react";
const raleway = Raleway({subsets:["latin"]});
export const metadata :Metadata={
    title:"Komal Prtfolio",
    description:"Next generation modern Komal's portfolio"
}
const layout = ({children}:{children:ReactNode})=>{
 return (
    <html lang="en">
    <body className="{raleway.className}">
      {children}
    </body>
    </html>
 )
}

export default layout