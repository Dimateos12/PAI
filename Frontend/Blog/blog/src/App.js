import './App.css';
import {Route, Routes} from "react-router-dom";
import SignInSide from "./Pages/SignInSide/SignInSide";
import SignUp from "./Pages/SignUp/SignUp";
import Blog from "./Pages/HomePage/Blog";
    

function App() {
  return (
      <div className="app">
              <Routes>
                 <Route path="/signin" element={<SignInSide/>} />
                 <Route path="/signup" element={<SignUp/>} />
                  <Route path="/" element={<Blog/>} />
               </Routes>
     
      </div>
  );
}

export default App;
