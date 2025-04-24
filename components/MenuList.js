"use client";
import { useState } from "react";
import Image from "next/image";

export default function MenuList() {
  const [menus, setMenus] = useState([
    { id: 101, title: "Berlin Espresso", harga: 37000, picture: "/coffe1.webp"  },
    { id: 102, title: "Capucino", harga: 25000, picture: "/americano.jpeg"  },
    { id: 103, title: "Ice Tea", harga: 20000, picture: "/latte.jpg"  },
    { id: 104, title: "pecel", harga: 20000, picture: "/capucino.webp"  },
    { id: 105, title: "soto daging", harga: 20000, picture: "/caramel.jpg"  },
    { id: 106, title: "Soto Ayam", harga: 37000, picture: "/Chocolate.webp"  },
    { id: 107, title: "Nasi Goreng", harga: 25000, picture: "/hazelnut.jpeg"  },
    { id: 108, title: "Mie Ayam", harga: 20000, picture: "/mocha.jpg"  },
  ]);

  const handleRemove = (id) => {
    setMenus(prev => prev.filter(menu => menu.id !== id));
  };

  return (
    <div id="menus" className="py-5 bg-white">
        <h1 className="text-center text-4xl font-bold text-gray-700">Check out our menu</h1>
          <div className="grid grid-cols-1 gap-x-30 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 mx-30 md:px-10 py-10">
            {menus.map((menu, index) => (
              <div
                key={menu.id} // Coba ganti ke: key={index}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
              <Image 
                src={menu.picture}
                alt={`Item ${index}`}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
                <div className="px-3">
                  <h2 className="text-xl font-semibold mb-2 text-gray-600">{menu.title}</h2>
                  <p>Berlin Espresso typically refers to a concentrated coffee drink.</p>
                </div>



                <div className="flex justify-between px-2 py-2">
                  <p className="text-gray-600 mb-4 font-semibold">Rp{menu.harga.toLocaleString("id-ID")}</p>
                  <button
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors duration-200"
                    onClick={() => handleRemove(menu.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
    </div>

  );
}
