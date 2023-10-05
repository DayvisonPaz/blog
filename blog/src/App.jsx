import {BrowserRouter,Route, Routes} from "react-router-dom"
import Berserk from "./templates/Berserk"
import './App.css'
import Home from "./home"
import Vagabond from "./templates/Vagabond"
function App() {

    const components = [<Berserk/>,<Vagabond/>]
    const data =[{"post":0,"title":"Beleza em berserk","route":"berserk","name":"Berserk"},{
      "post":1,"title":"A beleza de vagabond","route":"vagabond","name":"Berserk"}]
      

    const myroutes = data.map((e)=><Route path={`/${e.route}`} key={e.post}  element={components[e.post] } />)
  return (
    <BrowserRouter>
    <Routes>
    {myroutes}
    </Routes>
    </BrowserRouter>
  )
}

export default App
