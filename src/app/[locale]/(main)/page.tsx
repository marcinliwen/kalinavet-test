

import Image from 'next/image' 

import HomeHero from '../../componenets/home/homeHero';
import HomeAbout from '../../componenets/home/about';
import HomeServices from '../../componenets/home/services';
import FaqSectoin from '../../componenets/home/faqHome';
import AnkietaPopup from '../../componenets/ankietapopup';


export default function Home() {

  return (
   <main>
    <HomeHero />
    <HomeServices />

    <HomeAbout />
    <FaqSectoin />
   </main>
  )
}
