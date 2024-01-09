import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="w-full flex justify-center items-center h-[10vh]">
      <div className="font-[700] flex gap-2">
        <NavLink to="/" className={({ isActive }) => isActive ? "cursor-pointer border bg-white-600 rounded-md py-1 px-2  shadow-md" : "cursor-pointer "}>Home</NavLink>


        <NavLink to="/about"className={({ isActive }) => isActive ? "cursor-pointer border bg-white-600 rounded-md py-1 px-2 shadow-md" : "cursor-pointer "}>About</NavLink>

        <NavLink to="/contact"className={({ isActive }) => isActive ? "cursor-pointer border bg-white-600 rounded-md py-1 px-2 shadow-md" : "cursor-pointer "}>Contact</NavLink> 
      </div>
    </div>
  )
}

export default Header
