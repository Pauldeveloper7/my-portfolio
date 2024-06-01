import React from 'react'
import { ButtonsCard } from "./ui/tailwind-buttons";
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LayersIcon from '@mui/icons-material/Layers';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import ShareIcon from '@mui/icons-material/Share';
const Footer = () => {
  return (
    <div>
      <h1 className=' text-center text-5xl font-extrabold'>
      Elevate your digital presence to new heights?
      </h1>
      <div className=' flex gap-6 justify-center items-center'>
      <a href="mailto:komalpaul403@gmail.com">
          <ButtonsCard
            title="Let's get in touch"
            icon={<MailIcon/>}
          />
        </a>
         <ButtonsCard title=' '
         icon={<ShareIcon/>}
         />
      </div>
      <div className='flex  justify-center mt-11 items-center flex-col mb-5'>
         <p> Copyright  © 2024 Komal paul</p>
         <div className='flex flex-row gap-2'>
          <Link href={''}><GitHubIcon/></Link>
          <Link href={''}><LinkedInIcon/></Link>
          <Link href={''}><LayersIcon/></Link>
          <Link href={''}><TwitterIcon/></Link>
          <Link href={''}><YouTubeIcon/></Link>
         </div>
      </div>
    </div>
  )
}

export default Footer