import Image from 'next/image'

import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Card from '@/components/Card';
import MenuList from './MenuList/page';
import About_Us from './about/page';
import Banner from '@/components/Banner';
import CustomerReview from '@/components/CustomerReview';
import Footer from '@/components/Footer';
import Career from './Career/page';


// app/page.js
export default function Home() {




  
  return (
<div className="relative w-full h-screen bg-amber-700">

  
  {/* Navbar tetap di atas, dan tidak kena lapisan gelap */}
  <div className="absolute top-0 left-0 w-full z-20">
    <Navbar />
  </div>
  <Banner/>

  <MenuList/>

  <About_Us />

  <CustomerReview />

  <Career />

  <Footer />
</div>

  );
}