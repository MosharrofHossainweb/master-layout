
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      
        <nav className='p-5 bg-blue-400'>
            <div className='main_manu flex justify-between items-center flex-wrap gap-5'>
                <div className='manu_log'>
                    <h2 className='text-4xl font-bold text-blue-900'>Sara</h2>
                </div>
                <div className='manu'>
                    <ul className='flex gap-20 bg-blue-500 rounded-lg p-5 '>
                        <li><NavLink to="/"className={({ isActive,  }) =>isActive ?        "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg " : "text-xl font-bold text-yellow-300"}>Home</NavLink></li>
                        <li><NavLink to="/about"className={({ isActive,  }) =>isActive ?   "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg ": "text-xl font-bold text-yellow-300"}>About</NavLink></li>
                        <li><NavLink to="/contact"className={({ isActive,  }) =>isActive ? "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg " : "text-xl font-bold text-yellow-300"}>Contact</NavLink></li>
                        <li><NavLink to="/layoutTwo"className={({ isActive,  }) =>isActive ? "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg " : "text-xl font-bold text-yellow-300"}>Product</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar
