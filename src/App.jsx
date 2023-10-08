import {BrowserRouter,Route, Routes} from "react-router-dom"
import React,{ useState , useEffect} from 'react';
import Berserk from "./templates/Berserk"
import './App.css'
import Home from "./home"
import Vagabond from "./templates/Vagabond"
import axios from 'axios';
function App() {

    const components = [<Berserk/>,<Vagabond/>]
    const [posts,setPosts] = useState([])
    useEffect(() => { run()
      async function run(){
         
      await axios.get('http://localhost:3000/').then(response=>setPosts(response.data))
    
    
    }}, []);
      

    const myroutes = posts.map((e)=><Route path={`/${e.route}`} key={e.post}  element={components[e.post] } />)
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
