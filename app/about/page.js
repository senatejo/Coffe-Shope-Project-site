import Navbar from '@/components/Navbar';


// app/page.js
export default function About_Us() {
  return (
    <div id="about" className="bg-yellow-800">
      <main className="pt-10 flex flex-row ">
      <div className="basis-1/3"></div>
        <div className="basis-2/3 justify-center py-3">
          <h1 className="text-gray-300 text-3xl font-bold">Check out how we can get the best beans</h1>
          <button className="text-gray-300 bg-yellow-600 rounded-xl px-4 py-2 drop-shadow-2xl">
            Check out
          </button>
        </div>

      </main>
    </div>
  );
}