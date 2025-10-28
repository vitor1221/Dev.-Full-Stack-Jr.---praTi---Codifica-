import { NavLink } from "react-router-dom"

const linkStyles = ({ isActive }) => {
    return {
    marginRight: 8,
    textDecoration:"none",
    padding: "6px 10px",
    borderRadius: 6,
    border: "1px solid #ddd",
    backgroundColor: isActive ? "#f0f0f0" : "#0f0f0f",
    color: isActive ? "#000" : "#555"
}}

export default function Navbar() {
  return (
    <nav style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: 12,
        borderBottom: "1px solid #eee"
        }}>
            <NavLink to='/' style={linkStyles}>Home</NavLink>
            <NavLink to='/sobre' style={linkStyles}>Sobre</NavLink>
            <NavLink to='/post/1' style={linkStyles}>Post 1</NavLink>
            <NavLink to='/post/2' style={linkStyles}>Post 2</NavLink>
    </nav>
  )
}