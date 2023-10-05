import {BrowserRouter,Route, Routes} from "react-router-dom"
import Berserk from "./Berserk"
import './App.css'
import Home from "./home"
import Vagabond from "./Vagabond"
function App() {
    const data =[{"post":1,"title":"Beleza em berserk","route":"berserk","file":"Berserk","about":"como a historia de  berserk"},{"post":2,"title":"A beleza de vagabond","route":"vagabond","about":"A beleza no mangá de vagabond","file":"Vagabond"}]
    const myroutes = data.map((e)=><Route path={`/${e.route}`} key={e.post}  element={e.file} />)
  return (
    <BrowserRouter>
    <Routes>
    {myroutes}
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
