import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "../About/About";

const Header = () => {
  return (
    <div className="flex gap-8 justify-center items-center text-xl py-8 bg-slate-700">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/countries'>Countries</NavLink>

      
    </div>
  );
};

export default Header;
