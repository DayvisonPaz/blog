import React from 'react';
export default function Home(){
    const data =[{"title":"Beleza em berserk","file":"Berserk","about":"como a historia de  berserk"},{"title":"A beleza de vagabond","about":"A beleza no mangá de vagabond","file":"Vagabond"}]


    return(<div className='bg-blue-400 w-screen h-screen'>
    <div  className='bg-blue-400 w-scree h-full overflow-x-hidden  flex flex-col items-center'>
<div className='bg-red-400 w-screen h-[15vh]'>hello world</div>

{ data.map((e)=>(<a href={''} class="m-5 w-[60vw] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img class="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://i.pinimg.com/564x/3a/5f/9f/3a5f9f92ca7a64fcd2443838f6f61e3c.jpg" alt=""/>
<div class="flex w-[60vw] flex-col justify-between p-4 leading-normal">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.about}</p>
</div>
</a>
))


}


</div>
    
    </div>)}