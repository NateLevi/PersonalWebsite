import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react";
const MainLayout = () => {
  const [colorMode, setColorMode] = useState("light");
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    setColorMode(colorMode === "light" ? "dark" : "light");
  }
  useEffect(() => {
    if (colorMode === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }  }, [colorMode]);

  return (
    <div className="min-h-screen flex flex-col bg-">
      
      
      <main className="flex-grow mt-16 mb-8">
        <Outlet context={{ colorMode }}/>
      </main>
      <footer className="py-4">
        <span className="flex justify-center items-center text-gray-600">
          © Copyright 2025 DevNate Creations.
        </span>
      </footer>
      <Header className="fixed top-0 w-full z-50 " onClick={handleClick} colorMode={ colorMode }/>
    </div>
  )
}

export default MainLayout