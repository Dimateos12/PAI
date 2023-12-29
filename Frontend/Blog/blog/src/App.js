import './App.css';
import {Route, Routes} from "react-router-dom";
import SignInSide from "./Pages/SignInSide/SignInSide";
import SignUp from "./Pages/SignUp/SignUp";
import Blog from "./Pages/HomePage/Blog";
import SharedLayout from "./Routing/SharedLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
    

function App() {
  return (
      <div className="app">
              <Routes>
                  <Route path="/signin" element={<SignInSide/>} />
                  <Route path="/signup" element={<SignUp/>} />
                  <Route element={<SharedLayout />}>
                  <Route path="/" element={<Blog/>} />
                  <Route path="/profile" element={<ProfilePage/>} />
                      
                  </Route>
               </Routes>
               


</div>
  );
}

export default App;
