// import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

    const menuItems = [
        { text: 'Brands', hasSubmenu: true },
        { text: 'Plug & Play', link: '/category/plug-and-play-lighting' },
        { text: 'Ceiling Lights', hasSubmenu: true },
        { text: 'Chandeliers', hasSubmenu: true },
        { text: 'Wall Lights', hasSubmenu: true },
        { text: 'Outdoor', hasSubmenu: true },
        { text: 'Ceiling Fans', hasSubmenu: true },
        { text: 'Shop by Room', hasSubmenu: true },
        { text: 'New', hasSubmenu: true },
        { text: 'Learn', hasSubmenu: true },
        { text: 'Sale', hasSubmenu: true }
    ];

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link || '#'}
                            className="text-gray-700 hover:text-orange-500 text-sm whitespace-nowrap"
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home