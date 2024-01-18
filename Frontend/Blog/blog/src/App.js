import './App.css';
import {Route, Routes} from "react-router-dom";
import SignInSide from "./Pages/SignInSide/SignInSide";
import SignUp from "./Pages/SignUp/SignUp";
import Blog from "./Pages/HomePage/Blog";
import SharedLayout from "./Routing/SharedLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ListPosts from './Pages/Posts/ListPosts';
import HomePost from './Pages/Posts/HomePost';
import AdminPage from './Pages/AdminPage/AdminPage';
import Cateogry from './Pages/Category/Category';
import AddPost from './Pages/Posts/AddPost';
import Checkout from './Pages/BuyPage/Checkout';
    

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
                    <Route path='/admin' element={<AdminPage/>} />
                    <Route path='/category' element={<Cateogry/>} />
                    <Route path='/addpost' element={<AddPost/>} />
                    <Route path='/checkout' element={<Checkout/>} />

                  </Route>
               </Routes>
               


</div>
  );
}

export default App;
