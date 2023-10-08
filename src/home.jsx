import axios from 'axios';
import React,{ useState , useEffect} from 'react';


export default  function Home(data){
  const posts=data.data.posts

    

    return(<div className='bg-[#323C59] w-screen h-screen'>
    <div  className=' w-scree h-full overflow-x-hidden  flex flex-col items-center'>
<div className='bg-[#050A26] w-screen h-[15vh] text-white flex flex-col '> 

<div className='flex justify-center items-center '> <img className='w-[25vh]' src="https://onedrive.live.com/embed?resid=5B7331CADA79FF42%211203&authkey=%21APNeD7di3_XP8Hc&width=1128&height=376" alt="" /></div>
<div className='flex w-screen items-center justify-center' >
<div className='ml-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Blog</div>
<div className='ml-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>projects</div>
<div className='ml-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>About</div></div>

</div>

{posts.length>0?posts.map((e)=>(<a href={'/'+e.route} key={e.post} className="m-5 w-[60vw] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img className="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={e.tumb} alt=""/>
<div className="flex w-[60vw] flex-col justify-between p-4 leading-normal">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.About}</p>
</div>
</a>
)):<h1>carregadno</h1>


}


</div>
    
    </div>)}