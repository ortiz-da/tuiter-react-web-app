import logo from './logo.svg';
import './App.css';
import simpleComponent from "./SimpleComponent";
import SimpleComponent from "./SimpleComponent";
import Loops from "./Loops";
import Add from "./Add";
import Destructors from "./Destructors";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Tarp from "./tarp";

function App() {
    const bgColor = 'bg-warning'

  return (
      <div className={"container"}>

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  {/*If the URL has a /add inside of it, include this add element*/}
                  <Route path="/add/:parama/:paramb" element={<Add/>}/>
                  <Route path="/destructor" element={<Destructors/>}/>
                  <Route path="/loops" element={<Loops/>}/>
                  <Route path="/simple" element={<SimpleComponent/>}/>
                  <Route path="/tarp" element={<Tarp/>}/>



              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
