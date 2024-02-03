import { NavLink } from "react-router-dom";



const Navbar = () => {
  
  return (
    
    <header className='header'>
    
      <NavLink to='/'>
        
      </NavLink>
      
      <nav className='flex text-lg gap-7 font-medium'>
      
      <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-900" : "text-black" }>
          Home
        </NavLink>
        
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-900" : "text-black" }>
          About
          
        </NavLink>

        
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-900" : "text-black"}>
          Projects
        </NavLink>
        
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-900" : "text-black"}>
          Contact Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
