'use client'
import { useState } from "react"
import { Link } from "react-scroll"
const navItems = [
    {
        id: '0',
        name: 'Home'
    },
    {
        id: '1',
        name: 'Services'
    },
    {
        id: '2',
        name: 'About'
    }
]

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState("Home")

    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }

    return (
        <header className="bg-white py-4 flex justify-center shadow-lg fixed w-full">
            <nav className="w-[80%]">
                <ul className="flex  justify-end">
                    {
                        navItems.map(item => {
                            return (
                                <li className="flex flex-col" role="button" key={item.id}>
                                    <Link
                                        className={item.id > 0 && item.id < navItems.length - 1 ? "px-1" : item.id == navItems.length - 1 ? "ps-1" : "pe-1"}
                                        name={item.id}
                                        onSetActive={handleActiveIndex}
                                        onClick={handleActiveIndex}
                                        to={item.name}
                                        smooth={true}
                                        spy={true}
                                    >
                                        {item.name}
                                    </Link>
                                    <span className={`${activeIndex === item.name && "bg-red-400"} h-1 rounded-lg transition ease-in`} />
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}