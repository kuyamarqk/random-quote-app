"use client";
import { useState } from "react";

interface Quote {
  content: string;
  author: string;
} 

export default function Home() {
  const [data, setData] = useState(null);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Replace '*' with the actual domain that is making the request
      },
    };

    try {
      const response = await fetch('https://api.quotable.io/random', requestOptions);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="text-center rounded-20 m-20 p-56 bg-yellow-300">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10"> Food for Thoughts </h2>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">{data?.content}</h1>
        <p className="text-lg text-gray-500">{data?.author}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Generate</button>
    </div>
  );
}
