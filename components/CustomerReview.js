"use client";

import { useState } from "react";
import Image from "next/image";

export default function CustomerReview(){
    return(
        <div className="bg-white py-10">
            <div className="text-center">
                <h1 className="text-2xl text-gray-700" >Our happy customer</h1>

            </div>
            <div className="flex justify-center ">
                <div className="flex bg-white shadow-md overflow-hidden max-w-md p-4 rounded mx-5 hover:shadow-lg transition-shadow duration-300">
                    <Image 
                        src="/ReviewPic/orang1.jpeg"
                        alt="Foto reviewer"
                        width={40}
                        height={40}
                        className="object-cover h-10 w-10 rounded-full mr-4"
                    />

            
                    <div className="flex flex-col justify-center">
                        <h1 className="text-gray-800 font-bold text-sm">Udin</h1>
                        <p className="text-gray-600 text-sm">Kopinya enak, comment</p>
                    </div>
                </div>

                <div className="flex bg-white shadow-md overflow-hidden max-w-md p-4 rounded mx-5 hover:shadow-lg transition-shadow duration-300">
                    <Image 
                        src="/ReviewPic/orang1.jpeg"
                        alt="Foto reviewer"
                        width={40}
                        height={40}
                        className="object-cover h-10 w-10 rounded-full mr-4"
                    />

            
                    <div className="flex flex-col justify-center">
                        <h1 className="text-gray-800 font-bold text-sm">Estri wahluyo</h1>
                        <p className="text-gray-600 text-sm">Best place to coffe time</p>
                    </div>
                </div>

                <div className="flex bg-white shadow-md overflow-hidden max-w-md p-4 rounded mx-5 hover:shadow-lg transition-shadow duration-300">
                    <Image 
                        src="/ReviewPic/orang2.jpeg"
                        alt="Foto reviewer"
                        width={40}
                        height={40}
                        className="object-cover h-10 w-10 rounded-full mr-4"
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-gray-800 font-bold text-sm">Amber Estika</h1>
                        <p className="text-gray-600 text-sm">Kopinya enak, no comment</p>
                    </div>
                </div>
            </div>


        </div>
    );
}