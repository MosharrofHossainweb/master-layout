
import {  NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
      
        <nav className='p-5 bg-red-400'>
            <div className='main_manu flex justify-between items-center flex-wrap gap-5'>
                <div className='manu_log'>
                    <h2 className='text-4xl font-bold text-blue-900'>Saad</h2>
                </div>
                <div className='manu'>
                    <ul className='flex gap-20 bg-blue-500 rounded-lg p-5 '>
                        <li><NavLink to="/"className={({ isActive,  }) =>isActive ?        "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg " : "text-xl font-bold text-yellow-300"}>Home</NavLink></li>

                        <li><NavLink to="/layoutTwo/help"className={({ isActive,  }) =>isActive ?   "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg ": "text-xl font-bold text-yellow-300"}>Help</NavLink></li>


                        <li><NavLink to="/layoutTwo/blog"className={({ isActive,  }) =>isActive ? "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg " : "text-xl font-bold text-yellow-300"}>Blog</NavLink></li>
                        
                        <li><NavLink to="/layoutTwo"className={({ isActive,  }) =>isActive ? "text-xl font-bold text-white bg-blue-700 p-[5px] rounded-lg " : "text-xl font-bold text-yellow-300"}>Product</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar2
