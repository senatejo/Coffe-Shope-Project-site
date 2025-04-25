"use client";

import { useState } from "react";
import Image from "next/image";

export default function CustomerReview(){

    const Reviews = [
        {id:1, name: "Estri Wahluyo", description:"best place for coffe time", picture:"orang1.jpeg", rating: 5 },
        {id:2, name: "Estri galuyo", description:"best place for coffe time", picture:"orang2.jpeg", rating: 5},
        {id:3, name: "Estri raluyo", description:"best place for coffe time", picture:"orang3.jpg", rating: 5},
    ];

    const renderStars = (count) => {
        return (
          <div className="text-yellow-500 text-sm mt-1">
            {"★".repeat(count)}
            {"☆".repeat(5 - count)}
          </div>
        );
      };


    return(
        <div className="bg-white py-10">
            <div className="text-center">
                <h1 className="text-2xl text-gray-700" >Our happy customer</h1>

            </div>
            <div className="flex justify-center ">
                
            {Reviews.map((review) => (
                 <div key={review.id} className="flex bg-white shadow-md overflow-hidden max-w-md p-4 rounded mx-5 hover:shadow-lg transition-shadow duration-300">
                 <Image 
                     src={`/ReviewPic/${review.picture}`}
                     alt={`Foto ${review.name}`}
                     width={40}
                     height={40}
                     className="object-cover h-10 w-10 rounded-full mr-4"
                 />
                 <div className="flex flex-col justify-center">
                     <h1 className="text-gray-800 font-bold text-sm">{review.name}</h1>
                     <p className="text-gray-600 text-sm">{review.description}</p>
                     {renderStars(review.rating)}
                 </div>
             </div>

            ))}
               
            </div>


        </div>
    );
}