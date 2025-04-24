import Navbar from '@/components/Navbar';
import Image from 'next/image';


// app/page.js
export default function About_Us() {
  return (
    <div id="about" className="bg-yellow-800 max-h-80">
      <main className=" flex flex-row gap-6 ">
      <div className="flex-[2] flex justify-start items-start">
            <Image 
            src="/transparent/coffe-beans.png"
            alt="Coffee Beans"
            className="object-contain rotate-180 overflow-hidden"
            width={500}
            height={500}
            />
        </div>
        <div className="flex-[2] items-center py-10">
          <h1 className="text-gray-300 text-4xl font-bold">Check out how we can get the best beans</h1>
          <button className="text-gray-300 bg-yellow-600 rounded-xl px-4 py-2 drop-shadow-2xl hover:bg-yellow-500 transition-colors duration-200">
            Check out
          </button>
        </div>
        <div className="basis-128"></div>

      </main>
    </div>
  );
}