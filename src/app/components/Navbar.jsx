'use client'
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
    return (
        <header className="bg-[rgba(255,255,255,0.22)] py-4 flex justify-center shadow-lg fixed w-full">
            <nav className="w-[80%]">
                <ul className="flex gap-4 justify-end">
                    {
                        navItems.map(item => {
                            return (
                                <li role="button" key={item.id}>
                                    <Link
                                        to={item.name}
                                        smooth={true}
                                        spy={true}
                                        hashSpy={true}

                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}