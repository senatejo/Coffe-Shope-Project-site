"use client";

import { useState } from "react";

// components/Card.js
export default function Card({ title, content }) {


  const [cards, setcards] = useState([
      {id: 1, title: "card1", content:"isi card"},
      {id: 2, title: "card2", content:"isi card2"},
      {id: 3, title: "card3", content:"isi card3"},
      {id: 4, title: "card4", content:"isi card4"},
      {id: 5, title: "card5", content:"isi card5"},
  ]);

  const handleRemove = (id) => {
    setcards(prev => prev.filter(card => card.id !== id));
  };

    return (
<div className="grid gap-4">
      {cards.map((card) => (
        <div key={card.id} className="border p-4 rounded shadow">
          <h2 className="font-bold text-xl">{card.title}</h2>
          <p>{card.content}</p>
          <button
            onClick={() => handleRemove(card.id)}
            className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
          >
            Hapus
          </button>
        </div>
      ))}

      <>
      {cards.map((card) =>(
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p2>{card.content}</p2>
        </div>

      ))}
      </>
    </div>



    );
  }
  