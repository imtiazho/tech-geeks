import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import BlogsDetails from './Components/BlogsDetails/BlogsDetails';
import { createContext, useState } from 'react';


export const BlogContext = createContext()

function App() {
  const [blogs, setBlogs] = useState([])
  
  return (
    <BlogContext.Provider  value={[blogs, setBlogs]}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog/:id' element={<BlogsDetails></BlogsDetails>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
