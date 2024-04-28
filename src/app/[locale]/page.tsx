import Image from 'next/image' 

import HomeHero from '../componenets/home/homeHero';
import HomeAbout from '../componenets/home/about';
import HomeServices from '../componenets/home/services';
import FaqSectoin from '../componenets/home/faqHome';
import AnkietaPopup from '../componenets/ankietapopup';
import AlertNews from '../componenets/alertNews';


export default function Home() {

  return (
   <main>
    <HomeHero />
    <AlertNews />
    <HomeServices />
    
    <HomeAbout />
    <FaqSectoin />
   </main>
  )
}
