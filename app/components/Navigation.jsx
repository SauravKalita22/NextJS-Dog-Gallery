'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            // console.log(navRef.current); debug purpose
            if (navRef.current && !navRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, []);

    
    return(
        <div className="absolute">
            <button onClick={() => setIsOpen(!isOpen)} className="p-4 z-50 relative">
                {/* Hamburger Icon */}
                <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-black dark:bg-white"></span>
                    <span className="block w-8 h-0.5 bg-black dark:bg-white"></span>
                    <span className="block w-8 h-0.5 bg-black dark:bg-white"></span>
                </div>
            </button>
            <div ref={navRef} className={`${isOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'} fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 p-10 transition-transform z-40`}>
                <Link href="/" className="block p-4 text-black dark:text-white">Home</Link>
                <Link href="/all-dogs" className="block p-4 text-black dark:text-white">See All Dogs</Link>
            </div>
        </div>
    )
}