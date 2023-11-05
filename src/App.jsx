import {BrowserRouter,Route, Routes} from "react-router-dom"
import React,{ useState , useEffect} from 'react';
import Berserk from "./templates/Berserk"
import './App.css'
import Home from "./home"
import Vagabond from "./templates/Vagabond"
import axios from 'axios';
function App() {

    let pages= {"Berserk":<Berserk/>,"Vagabond":<Vagabond/>}


    
    const [posts,setPosts] = useState([])
    useEffect(() => { run()
      async function run(){
         
      await axios.get('http://localhost:3000/').then(response=>setPosts(response.data))
    
    
    }}, []);
      console.log("valor de Berserk:",pages["Berserk"])
    const myroutes = posts.map((e)=><Route path={`/${e.route}`} key={e.post}  element={pages[`${e.route}`] } />)
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'   element={<Home data={{posts}} />} />
    {myroutes}
    </Routes>
    </BrowserRouter>
  )
}

export default App
