// import { useState, useEffect } from 'react'
import './App.css'
// import axios from "axios"

import MainLayout from './layouts/MainLayout'
import Header from './components/Header'
import AboutText from './components/AboutText';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

//Page Imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
// Router for rendering different pages
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} /> {/* Default route for "/" */}
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/projects' element={<ProjectPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;


};






// const App = () => {
// //   const [count, setCount] = useState(0)
// //   const [array,setArray] = useState([])
// //   const fetchAPI = async () => {
// //     const response = await axios.get("http://localhost:8080/api")
// //     setArray(response.data.fruits)
// //     console.log(response.data.fruits)
// //   }

// //   useEffect(()=>{
// //     fetchAPI()
// //   }, []);

//   return (
//     <>
//       {/* <h1>Vite + React</h1> */}
//       {/* <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button> */}
//         <Header/>
//           {/* {array.map((fruit,index) => (
//             <div key= {index}>
//               <p className="text-red-500">{fruit}</p>
//               <br></br>
//             </div>
//           ))} */}
//     </>
    
//   )
// }

export default App
