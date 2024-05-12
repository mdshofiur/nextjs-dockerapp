import React from 'react';

async function getData() {
   // const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
   const res = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}`);
   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
   }
   const data = await res.json();
   return data;
}

export default async function Home() {
   const data = await getData();

   console.log('process.env.FETCH_URL', process.env.NEXT_PUBLIC_FETCH_URL);

   return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
         <h1 className='font-bold text-2xl text-center'>
            Hello! Welcome to the Home Page <br /> {process.env.NEXT_PUBLIC_FETCH_URL}
         </h1>
         {data?.map((item: any) => (
            <div
               key={item?.id}
               className='flex flex-col items-center justify-center pt-10'>
               <h2>{item?.title}</h2>
               {/* <p>{item.email}</p> */}
            </div>
         ))}
      </main>
   );
}



// "postbuild": "node .next/standalone/server.js"