"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const handleClick = async (event) => {
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
    <div className="text-center rounded-20 m-20 p-32 bg-yellow-300 border-white rounded">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Food for Thoughts</h1>
      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">{data?.content}</h2>
      <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-10">{data?.author}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Generate</button>
      <div className="text-center text-gray-900 mt-10">Share on Socials</div>
    </div>
  );
}
