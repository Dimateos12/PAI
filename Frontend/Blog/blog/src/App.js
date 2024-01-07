import './App.css';
import {Route, Routes} from "react-router-dom";
import SignInSide from "./Pages/SignInSide/SignInSide";
import SignUp from "./Pages/SignUp/SignUp";
import Blog from "./Pages/HomePage/Blog";
import SharedLayout from "./Routing/SharedLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ListPosts from './Pages/Posts/ListPosts';
import HomePost from './Pages/Posts/HomePost';
    

function App() {
  return (
      <div className="app">
              <Routes>
                    <Route path="/signin" element={<SignInSide/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route element={<SharedLayout />}>
                    <Route path="/" element={<Blog/>} />
                    <Route path="/profile" element={<ProfilePage/>} />
                    <Route path="/section" element={<ListPosts/>} />
                    <Route path="/post/:postId" element={<HomePost/>} />
                  </Route>
               </Routes>
               


</div>
  );
}

export default App;
