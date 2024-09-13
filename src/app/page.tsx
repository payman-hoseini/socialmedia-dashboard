'use client'
import { useEffect, useState } from "react";
import Cards from "./components/cards";
import Header from "./components/header"
import Summery from "./components/summery"

export default function Home() {
  const [darkMode,setDarkMode] = useState<boolean>(false)
  return (
    <>
    <div className={`${darkMode ? "dark" : "light"} bg-top-background h-[28vh] rounded-b-3xl`}>
        <div className="max-w-[1440px] w-[90vw] mx-auto">
            <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
            <Summery />
            <Cards darkMode={darkMode}/>
        </div>
    </div>
    <div className={`${darkMode ? "dark" : "light"} bg-background h-screen  bg-scroll`}></div>
    </>
  );
}
