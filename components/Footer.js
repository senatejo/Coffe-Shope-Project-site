
import Image from "next/image";

export default function Footer(){
    return(
    <footer className="bg-yellow-800 text-white py-10">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo / Brand */}
        <div>
        <h2 className="text-xl font-bold mb-4">CoffeeLoka</h2>
        <p className="text-sm">Ngopi santai sambil nugas? Di sini tempatnya.</p>
        </div>

        {/* Navigation */}
        <div>
        <h3 className="font-semibold mb-2">Explore</h3>
        <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#menu" className="hover:underline">Menu</a></li>
            <li><a href="#review" className="hover:underline">Reviews</a></li>
        </ul>
        </div>

        {/* Contact Info */}
        <div>
        <h3 className="font-semibold mb-2">Contact</h3>
        <ul className="space-y-2 text-sm">
            <li>Email: coffeeloka@email.com</li>
            <li>Phone: +62 812 3456 7890</li>
            <li>Malang, Indonesia</li>
        </ul>
        </div>

        {/* Social Icons */}
        <div>
        <h3 className="font-semibold mb-2">Follow Us</h3>
        <div className=" space-x-4 flex-col space-y-2">
            <div className="flex">
                <Image
                src="/icons/instagram.png"
                alt="instagram_Icon"
                width={30}
                height={30} />
                <h1 className="pl-1">Coffeloka</h1>
            </div>
            <div className="flex">
                <Image
                src="/icons/facebook.png"
                alt="facebook_Icon"
                width={30}
                height={30} />
                <h1 className="pl-1">Coffe loka</h1>
            </div>
        </div>
        </div>

    </div>

    {/* Copyright */}
    <div className="text-center mt-10 text-sm text-gray-300">
        &copy; 2025 CoffeeLoka. All rights reserved.
    </div>
    </footer>

    );
}