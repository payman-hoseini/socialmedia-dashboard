'use client'
import { Dispatch, SetStateAction } from "react";


export default function Header({setDarkMode , darkMode} : { setDarkMode : Dispatch<SetStateAction<boolean>> , darkMode : boolean}){
    function toggleDarkMode() {
        darkMode ? setDarkMode(false) : setDarkMode(true)
    }
    return (
        <div className="md:flex-row flex flex-col md:justify-between md:items-center py-7 ">
            <div className={`border-b ${darkMode ? "border-b-text" : "border-b-bw-text"} pb-4 md:border-none md:pb-0`}>
                <h1 className="font-bold md:text-3xl text-2xl text-bw-text">Social Media Dashboard</h1>
                <p className="text-text font-bold text-sm md:text-base">Total Followers: 23,004</p>
            </div>
            <div className="mt-3 md:mt-0 flex justify-between items-center space-x-5">
                <p className="text-text font-bold text-sm">Dark Mode</p>
                <label className="switch">
                    <input type="checkbox" onClick={toggleDarkMode} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}